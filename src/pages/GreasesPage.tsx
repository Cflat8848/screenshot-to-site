import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getCategoryBySlug } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductGrid from "@/components/ProductGrid";
import { ArrowLeft, ChevronRight } from "lucide-react";

const GreasesPage = () => {
  const category = getCategoryBySlug("greases");

  if (!category) {
    return <div>Category not found</div>;
  }

  const allProducts = category.subCategories.flatMap(sub => sub.products);

  return (
    <>
      <Helmet>
        <title>Greases | Global Lubricants Industries Pvt. Ltd.</title>
        <meta name="description" content="Premium quality greases for automotive and industrial applications. Rubber grease, bearing grease, chassis grease, and more." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-12 md:py-16 bg-gradient-dark">
            <div className="container mx-auto px-4">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/#products" className="hover:text-primary transition-colors">Products</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-primary">Greases</span>
              </nav>

              <Link 
                to="/#products" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Products
              </Link>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
                GREASES
              </h1>
              <p className="text-muted-foreground max-w-2xl text-lg">
                High-quality greases for automotive, industrial, and specialized applications.
              </p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <ProductGrid products={allProducts} />
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default GreasesPage;
