import { Link } from "react-router-dom";
import { Cog, Factory, Thermometer, Car } from "lucide-react";

const categories = [
  { name: "Automotive Oils", icon: Car, description: "Engine oils for all vehicles", link: "/products/automotive-oils" },
  { name: "Industrial Oils", icon: Factory, description: "Heavy-duty industrial lubricants", link: "/products/industrial-oils" },
  { name: "Greases", icon: Cog, description: "Premium quality greases", link: "/products/greases" },
  { name: "Antifreeze & Coolants", icon: Thermometer, description: "Cooling system fluids", link: "/products/antifreeze" },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary">
            OUR PRODUCTS
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive range of lubricants and fluids for every industry
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.link}
              className="group bg-card hover:bg-secondary border border-border rounded-xl p-6 text-center transition-all duration-300 hover:shadow-glow-gold hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary group-hover:bg-primary/20 rounded-xl flex items-center justify-center transition-colors duration-300">
                <category.icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm mt-2">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
