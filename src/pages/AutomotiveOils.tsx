import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getCategoryBySlug } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Car, Truck, Bike, Tractor, Cog, ChevronRight, ArrowLeft } from "lucide-react";

const subCategoryIcons: Record<string, React.ElementType> = {
  "passenger-light-commercial": Car,
  "heavy-duty-motor-oils": Truck,
  "motorcycle-oils": Bike,
  "agriculture-oils": Tractor,
  "automotive-gear-oils": Cog,
};

const AutomotiveOils = () => {
  const category = getCategoryBySlug("automotive-oils");

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>Automotive Oils | Global Lubricants Industries Pvt. Ltd.</title>
        <meta name="description" content="Premium automotive oils including engine oils for passenger vehicles, heavy duty motors, motorcycles, agriculture, and gear oils. RACOIL brand quality lubricants." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-12 md:py-16 bg-gradient-dark">
            <div className="container mx-auto px-4">
              {/* Back Link */}
              <Link 
                to="/#products" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Products
              </Link>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
                AUTOMOTIVE OILS
              </h1>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Premium quality engine oils and lubricants for all types of vehicles. 
                From passenger cars to heavy-duty trucks, we've got you covered.
              </p>
            </div>
          </section>

          {/* Sub-Categories Grid */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.subCategories.map((subCategory, index) => {
                  const Icon = subCategoryIcons[subCategory.slug] || Cog;
                  
                  return (
                    <Link
                      key={subCategory.id}
                      to={`/products/automotive-oils/${subCategory.slug}`}
                      className="group bg-card border border-border rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-glow-gold hover:-translate-y-1 hover:border-primary/50 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-secondary group-hover:bg-primary/20 rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                          <Icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors" />
                        </div>
                        
                        <div className="flex-1">
                          <h2 className="font-display text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors mb-2">
                            {subCategory.name}
                          </h2>
                          <p className="text-muted-foreground text-sm mb-3">
                            {subCategory.products.length} Products
                          </p>
                          <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            View Products
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default AutomotiveOils;
