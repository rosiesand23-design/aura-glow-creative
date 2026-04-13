import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductByHandle, ShopifyProduct } from "@/lib/shopify";
import { Loader2, ArrowLeft } from "lucide-react";

import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (!handle) return;
    setLoading(true);
    fetchProductByHandle(handle)
      .then((p) => setProduct(p))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [handle]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="flex justify-center items-center pt-20 pb-20">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <div className="text-center pt-20 pb-20">
          <p className="text-muted-foreground mb-4">Product not found</p>
          <Link to="/" className="text-sm tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const images = product.node.images.edges;
  const variants = product.node.variants.edges;
  const selectedVariant = variants[selectedVariantIdx]?.node;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-12 pb-20">
        <Link to="/#collections" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="aspect-[4/5] bg-card overflow-hidden mb-4">
              {images[selectedImage] ? (
                <img
                  src={images[selectedImage].node.url}
                  alt={images[selectedImage].node.altText || product.node.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">No image</div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-16 h-16 flex-shrink-0 bg-card overflow-hidden border-2 transition-colors ${
                      i === selectedImage ? "border-accent" : "border-transparent"
                    }`}
                  >
                    <img src={img.node.url} alt={img.node.altText || ""} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              {product.node.title}
            </h1>
            <p className="text-xl text-foreground font-medium mb-6">
              {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || "0").toFixed(2)}
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              {product.node.description}
            </p>

            {product.node.options.map((option) => {
              if (option.name === "Title" && option.values.length === 1 && option.values[0] === "Default Title") return null;
              return (
                <div key={option.name} className="mb-6">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">{option.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map((value) => {
                      const variantIdx = variants.findIndex((v) =>
                        v.node.selectedOptions.some((o) => o.name === option.name && o.value === value)
                      );
                      const isSelected = selectedVariantIdx === variantIdx;
                      return (
                        <button
                          key={value}
                          onClick={() => setSelectedVariantIdx(variantIdx >= 0 ? variantIdx : 0)}
                          className={`px-4 py-2 text-sm border transition-colors ${
                            isSelected
                              ? "border-foreground text-foreground"
                              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                          }`}
                        >
                          {value}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;