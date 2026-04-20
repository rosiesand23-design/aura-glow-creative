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
    <section className="py-16 md:py-24 bg-secondary/30" id="collections">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
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
            {products.map((product, i) => {
              const img = product.node.images.edges[0]?.node;
              const rotation = ["-1.5deg", "1deg", "-0.5deg", "1.5deg", "0.5deg", "-1deg", "1.2deg", "-0.8deg"][i % 8];
              return (
                <Link
                  to={`/product/${product.node.handle}`}
                  key={product.node.id}
                  className="group block"
                  style={{ transform: `rotate(${rotation})` }}
                >
                  <div className="bg-white p-2 md:p-3 shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-square overflow-hidden bg-white mb-2">
                      {img ? (
                        <img
                          src={img.url}
                          alt={img.altText || product.node.title}
                          loading="lazy"
                          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                          No image
                        </div>
                      )}
                    </div>
                    <div className="bg-foreground py-1.5 px-2 text-center">
                      <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-white font-body truncate">
                        {product.node.title}
                      </p>
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
