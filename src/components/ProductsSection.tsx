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
    <section className="bg-white pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 lg:px-20" id="collections">
      <div className="max-w-6xl mx-auto">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-10 md:gap-y-16">
            {products.slice(0, 8).map((product, index) => {
              const img = product.node.images.edges[0]?.node;
              const rotations = [-3, 2, -2, 3, -2, 3, -3, 2];
              const rotation = rotations[index % rotations.length];
              return (
                <Link
                  to={`/product/${product.node.handle}`}
                  key={product.node.id}
                  className="group block"
                  style={{ transform: `rotate(${rotation}deg)` }}
                  aria-label={product.node.title}
                >
                  <div className="bg-white p-2.5 pb-10 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-[1.03] relative">
                    <div className="aspect-square overflow-hidden bg-white border border-foreground/10">
                      {img ? (
                        <img
                          src={img.url}
                          alt={img.altText || product.node.title}
                          loading="lazy"
                          className="w-full h-full object-contain p-3"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                          No image
                        </div>
                      )}
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[78%] bg-foreground text-background text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-center py-1.5 px-2 truncate">
                      {product.node.title}
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
