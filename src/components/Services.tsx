import { Palette, Factory, Truck, FlaskConical } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Customization",
    description: "We offer fully customizable lubricant formulations to match your specific needs, from product design to branding and packaging.",
  },
  {
    icon: Factory,
    title: "Manufacturing Excellence",
    description: "Our state-of-the-art manufacturing facilities adhere to the highest standards of quality and safety.",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description: "We ensure timely and efficient delivery of all products, no matter the scale of your operations.",
  },
  {
    icon: FlaskConical,
    title: "Research & Development",
    description: "Innovation is at the core of our business. Our dedicated R&D team develops high-performance formulations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Comprehensive solutions for all your lubricant needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary/20 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
