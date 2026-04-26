import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts, ShopifyProduct } from "@/lib/shopify";
import { Loader2 } from "lucide-react";

// Hardcoded names to match the mockup layout (8 polaroids in a 4x2 grid)
const MOCKUP_NAMES = [
  "Glow Mask",
  "Extreme Moisture Blend",
  "Shea Body Butter",
  "Night Renewal Creme",
  "Collagen and Retinol Serum",
  "Active Eye Cream",
  "Soothing Emulsion",
  "Collagen Moisturizer",
];

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
    <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24" id="collections">
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {MOCKUP_NAMES.map((name, index) => {
              const product = products[index];
              const img = product?.node.images.edges[0]?.node;
              const handle = product?.node.handle;

              const Card = (
                <div className="bg-white shadow-[0_6px_20px_rgba(0,0,0,0.12)] flex flex-col p-2 md:p-3">
                  {/* Photo area with thin inner border */}
                  <div className="aspect-square bg-white border border-black/80 flex items-center justify-center overflow-hidden">
                    {img ? (
                      <img
                        src={img.url}
                        alt={img.altText || name}
                        loading="lazy"
                        className="w-[80%] h-[80%] object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="w-full h-full bg-neutral-100" />
                    )}
                  </div>
                  {/* Black label bar */}
                  <div className="bg-black text-white text-center py-2.5 md:py-3 px-2 mt-2 md:mt-3">
                    <span className="font-body text-[10px] md:text-xs tracking-[0.2em] uppercase">
                      {name}
                    </span>
                  </div>
                </div>
              );

              return handle ? (
                <Link
                  to={`/product/${handle}`}
                  key={name}
                  className="group block"
                >
                  {Card}
                </Link>
              ) : (
                <div key={name} className="group">
                  {Card}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
