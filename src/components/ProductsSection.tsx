import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { Loader2 } from "lucide-react";

// Stable pseudo-random rotation per index
const ROTATIONS = [-2.1, 1.5, -0.8, 2.3, 1.1, -1.7, 0.6, -2.5, 1.9, -0.4, 2.0, -1.3, 0.9, -2.2, 1.7, -0.5];

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
      <div className="max-w-6xl mx-auto">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 px-4 md:px-0">
            {products.map((product, i) => {
              const img = product.node.images.edges[0]?.node;
              const rotation = ROTATIONS[i % ROTATIONS.length];
              return (
                <Link
                  to={`/product/${product.node.handle}`}
                  key={product.node.id}
                  className="group cursor-pointer block"
                >
                  <div
                    className="bg-white shadow-[2px_3px_12px_rgba(0,0,0,0.12)] p-3 pb-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[2px_5px_20px_rgba(0,0,0,0.18)]"
                    style={{ transform: `rotate(${rotation}deg)` }}
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
                    <div className="bg-black py-2 px-3 -mx-3">
                      <h3 className="font-display text-[10px] md:text-xs text-white text-center tracking-[0.15em] uppercase truncate">
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