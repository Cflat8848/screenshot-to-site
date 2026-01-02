import { CheckCircle } from "lucide-react";

const features = [
  "ISO Certified Manufacturing",
  "State-of-the-art Facilities",
  "Expert R&D Team",
  "Custom Formulations",
  "Global Quality Standards",
  "Timely Delivery",
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary">
              ABOUT US
            </h2>
            <p className="text-foreground/90 mt-6 text-lg leading-relaxed">
              Global Lubricants Industries Pvt. Ltd. is a trusted manufacturer of high-quality lubricants, serving diverse industries such as automotive, industrial, agricultural, and construction sectors.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              We specialize in customization, offering tailored lubricant formulations that align with your brand and operational needs. Our state-of-the-art manufacturing facilities adhere to the highest standards of quality and safety.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mt-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-display text-5xl md:text-6xl text-primary">10+</div>
                  <p className="text-muted-foreground mt-2">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="font-display text-5xl md:text-6xl text-primary">500+</div>
                  <p className="text-muted-foreground mt-2">Products</p>
                </div>
                <div className="text-center">
                  <div className="font-display text-5xl md:text-6xl text-primary">100+</div>
                  <p className="text-muted-foreground mt-2">Clients</p>
                </div>
                <div className="text-center">
                  <div className="font-display text-5xl md:text-6xl text-primary">24/7</div>
                  <p className="text-muted-foreground mt-2">Support</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
