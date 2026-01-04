import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl">
          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none animate-slide-up">
            <span className="text-foreground">RAC</span><span className="text-primary">OIL</span>
          </h1>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mt-2 md:mt-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            LUBRICANTS & GREASE
          </h2>
          <p className="font-display text-xl sm:text-2xl md:text-3xl text-primary/90 mt-1 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            NEPAL
          </p>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-xl mt-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Trusted manufacturer of high-quality lubricants serving automotive, industrial, agricultural, and construction sectors.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <a
              href="#products"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-glow-gold"
            >
              Our Products
            </a>
            <a
              href="#contact"
              className="border-2 border-foreground/30 hover:border-primary hover:text-primary text-foreground px-8 py-3 rounded-full font-semibold transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
