import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getSubCategoryBySlug, getCategoryBySlug } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProductGrid from "@/components/ProductGrid";
import { ArrowLeft, ChevronRight } from "lucide-react";

const SubCategoryPage = () => {
  const { categorySlug, subCategorySlug } = useParams();
  
  const category = getCategoryBySlug(categorySlug || "");
  const subCategory = getSubCategoryBySlug(categorySlug || "", subCategorySlug || "");

  if (!category || !subCategory) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-foreground mb-4">Category not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{subCategory.name} | {category.name} | Global Lubricants Industries</title>
        <meta 
          name="description" 
          content={`Browse our ${subCategory.name} products. High-quality ${category.name.toLowerCase()} for superior engine protection and performance.`} 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-12 md:py-16 bg-gradient-dark">
            <div className="container mx-auto px-4">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/#products" className="hover:text-primary transition-colors">Products</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to={`/products/${categorySlug}`} className="hover:text-primary transition-colors">
                  {category.name}
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-primary">{subCategory.name}</span>
              </nav>

              {/* Back Link */}
              <Link 
                to={`/products/${categorySlug}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {category.name}
              </Link>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
                {subCategory.name.toUpperCase()}
              </h1>
              <p className="text-muted-foreground max-w-2xl text-lg">
                {subCategory.products.length} premium quality products for your needs
              </p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <ProductGrid products={subCategory.products} />
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default SubCategoryPage;
