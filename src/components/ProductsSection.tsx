import product2 from "@/assets/product-2.webp";
import product3 from "@/assets/product-3.webp";
const products = [
  {
    image: "/b576fe72-3847-4c77-8a18-0f25a9430b01.webp",
    name: "Active Eye Cream",
    category: "Eye Cream",
    price: "$",
    description: "A firming, fatigue-fighting formula designed to smooth and energize the delicate eye area.\n",
  },
  {
    image: product2,
    name: "Collagen and Retinol Serum ",
    category: "Serum",
    price: "$",
    description: "​A powerhouse blend of collagen, retinol, and hyaluronic acid that firms, smooths, and deeply hydrates for skin that feels plump, protected, and radiant every day. ",
  },
  {
    image: product3,
    name: "Mild Toning Elixir",
    category: "Toner",
    price: "$",
    description: "Refresh, balance, and prep—the gentle way.",
  },
];

const ProductsSection = () => {
  return (
    <section className="section-padding" id="collections">
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

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {products.map((product) => (
            <div key={product.name} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 bg-card">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                {product.category}
              </p>
              <h3 className="font-display text-xl text-foreground mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3 font-light">
                {product.description}
              </p>
              <p className="text-sm tracking-wider text-foreground font-medium">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
