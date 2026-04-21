import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { Loader2 } from "lucide-react";

const ProductsSection = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts(50)
      .then(setProducts)
      .catch((e) => console.error("Failed to fetch products:", e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="section-padding bg-white" id="collections">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Collection
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Curated for Your Ritual
          </h2>
          <div className="divider-gold mt-6" />
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => {
              const img = product.node.images.edges[0]?.node;
              return (
                <Link
                  to={`/product/${product.node.handle}`}
                  key={product.node.id}
                  className="group cursor-pointer block"
                >
                  <div className="bg-white border border-border shadow-md p-3 pb-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-lg"
                    style={{ transform: `rotate(${Math.random() * 4 - 2}deg)` }}
                  >
                    <div className="aspect-square overflow-hidden bg-white mb-3">
                      {img ? (
                        <img
                          src={img.url}
                          alt={img.altText || product.node.title}
                          loading="lazy"
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                          No image
                        </div>
                      )}
                    </div>
                    <div className="bg-foreground py-2 px-3 -mx-3">
                      <h3 className="font-display text-xs md:text-sm text-white text-center tracking-wider uppercase truncate">
                        {product.node.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;