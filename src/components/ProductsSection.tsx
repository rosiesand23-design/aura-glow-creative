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
    <section className="section-padding bg-background" id="collections">
      <div className="max-w-7xl mx-auto bg-background">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12 px-2 md:px-0">
            {products.map((product, index) => {
              const img = product.node.images.edges[0]?.node;
              const rotations = [-3, 2, -2, 3, -2, 2, -3, 1];
              const rotation = rotations[index % rotations.length];
              return (
                <Link
                  to={`/product/${product.node.handle}`}
                  key={product.node.id}
                  className="group cursor-pointer block"
                  style={{ transform: `rotate(${rotation}deg)` }}
                >
                  <div className="transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 relative">
                    <div className="aspect-square overflow-hidden bg-white shadow-[0_8px_24px_-6px_rgba(0,0,0,0.18),0_2px_6px_-2px_rgba(0,0,0,0.12)] group-hover:shadow-[0_18px_40px_-10px_rgba(0,0,0,0.28),0_6px_14px_-4px_rgba(0,0,0,0.16)] transition-shadow duration-500">
                      {img ? (
                        <img
                          src={img.url}
                          alt={img.altText || product.node.title}
                          loading="lazy"
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          No image
                        </div>
                      )}
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