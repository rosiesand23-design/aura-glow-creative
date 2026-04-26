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
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white" id="collections">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-14 md:gap-y-20">
            {products.map((product, index) => {
              const img = product.node.images.edges[0]?.node;
              const rotations = [-2.5, 1.8, -1.2, 2.2, 1.5, -2, 2.5, -1.5];
              const rotation = rotations[index % rotations.length];
              return (
                <Link
                  to={`/product/${product.node.handle}`}
                  key={product.node.id}
                  style={{ transform: `rotate(${rotation}deg)` }}
                  className="group block bg-white p-3 pb-0 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.18),0_2px_4px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_36px_-10px_rgba(0,0,0,0.28),0_4px_8px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1 hover:rotate-0"
                >
                  <div className="border border-black/15">
                    <div className="aspect-square overflow-hidden bg-white">
                      {img ? (
                        <img
                          src={img.url}
                          alt={img.altText || product.node.title}
                          loading="lazy"
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                          No image
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="bg-black text-white text-center py-2.5 px-2 my-3 mx-1">
                    <p className="text-[9px] md:text-[10px] tracking-[0.18em] uppercase font-light truncate">
                      {product.node.title}
                    </p>
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
