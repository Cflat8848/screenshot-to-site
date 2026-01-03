import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-surface-dark py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RACOIL Lubricants & Grease" className="h-10 w-auto" />
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} RACOIL Lubricants & Grease. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Home
            </a>
            <a href="#products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Products
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
