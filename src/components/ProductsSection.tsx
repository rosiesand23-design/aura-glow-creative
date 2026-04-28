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
      <div className="max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Collection
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Curated for Your Ritual
          </h2>
          <div className="divider-gold mt-6" />
        </div>

        <div className="bg-black w-full mb-12">
          <div className="px-6 py-0.5 md:py-1">
            <h2 className="text-white tracking-[0.3em] uppercase font-semibold text-[8px] md:text-[10px]">
              Dulce Hana
            </h2>
          </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
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
                  <div className="transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 relative">
                    <div className="aspect-square overflow-hidden bg-white">
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

        <div className="bg-black w-full mt-12">
          <div className="px-6 py-0.5 md:py-1 flex justify-end">
            <h2
              className="text-white text-[10px] md:text-xs leading-none"
              style={{ fontFamily: '"Ma Shan Zheng", "Noto Serif SC", cursive' }}
            >
              甜花
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;