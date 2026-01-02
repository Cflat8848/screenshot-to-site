import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Global Lubricants Industries Pvt. Ltd. | Premium Lubricant Manufacturer Nepal</title>
        <meta name="description" content="Global Lubricants Industries - Trusted manufacturer of high-quality automotive, industrial & agricultural lubricants in Nepal. ISO certified with custom formulations." />
        <meta name="keywords" content="lubricants, engine oil, industrial oil, grease, Nepal, Global Lubricants, automotive lubricants" />
        <link rel="canonical" href="https://www.globallubericants.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Global Lubricants Industries Pvt. Ltd." />
        <meta property="og:description" content="Trusted manufacturer of high-quality lubricants for automotive, industrial, and agricultural sectors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.globallubericants.com/" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Global Lubricants Industries Pvt. Ltd.",
            "url": "https://www.globallubericants.com/",
            "logo": "https://www.globallubericants.com/img/logo.png",
            "description": "Trusted manufacturer of high-quality lubricants for automotive, industrial, agricultural, and construction sectors.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "DEVDAHA-03",
              "addressLocality": "RUPANDEHI",
              "addressCountry": "Nepal"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+977-9767612453",
              "contactType": "customer service",
              "email": "info@globallubricants.com"
            },
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61565604573304"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ProductCategories />
          <About />
          <Services />
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
