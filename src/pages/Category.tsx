import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { Loader2, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PixieDust from "@/components/PixieDust";

const CATEGORY_META: Record<string, { title: string; subtitle: string; query: string }> = {
  serums: {
    title: "Serums",
    subtitle: "Concentrated formulas for targeted results",
    query: "product_type:Serums",
  },
  moisturizers: {
    title: "Moisturizers",
    subtitle: "Deep hydration rooted in botanical science",
    query: "product_type:Moisturizers",
  },
  cleanser: {
    title: "Cleansers",
    subtitle: "Gentle formulas for a fresh, radiant complexion",
    query: "product_type:Cleansers",
  },
  toners: {
    title: "Toners",
    subtitle: "Balancing botanicals to refine and refresh",
    query: "product_type:Toners",
  },
  creams: {
    title: "Creams",
    subtitle: "Rich, nourishing textures for lasting comfort",
    query: "product_type:Creams",
  },
  masks: {
    title: "Masks",
    subtitle: "Ritual treatments for renewed radiance",
    query: "product_type:Masks",
  },
  oils: {
    title: "Oils",
    subtitle: "Pure botanical oils for luminous skin",
    query: "product_type:Oils",
  },
  "body-butters": {
    title: "Body Butters",
    subtitle: "Decadent hydration from head to toe",
    query: "product_type:Body Butters",
  },
  all: {
    title: "All Products",
    subtitle: "The complete Dulce Hana collection",
    query: "",
  },
};

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  const meta = CATEGORY_META[slug || ""] || CATEGORY_META.all;

  useEffect(() => {
    setLoading(true);
    fetchProducts(50, meta.query || undefined)
      .then(setProducts)
      .catch((e) => console.error("Failed to fetch products:", e))
      .finally(() => setLoading(false));
  }, [meta.query]);

  return (
    <div className="min-h-screen bg-background">
      <PixieDust />
      <Navbar />

      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Shop
            </p>
            <h1 className="heading-section text-foreground mb-4">{meta.title}</h1>
            <p className="text-muted-foreground font-light max-w-md mx-auto">
              {meta.subtitle}
            </p>
            <div className="divider-gold mt-6" />
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No products found in this category</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {products.map((product) => {
                const img = product.node.images.edges[0]?.node;
                const price = product.node.priceRange.minVariantPrice;
                return (
                  <Link
                    to={`/product/${product.node.handle}`}
                    key={product.node.id}
                    className="group cursor-pointer block"
                  >
                    <div className="aspect-[4/5] overflow-hidden mb-6 bg-card">
                      {img ? (
                        <img
                          src={img.url}
                          alt={img.altText || product.node.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          No image
                        </div>
                      )}
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-1">
                      {product.node.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 font-light line-clamp-2">
                      {product.node.description}
                    </p>
                    <p className="text-sm tracking-wider text-foreground font-medium">
                      {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                    </p>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Category;
