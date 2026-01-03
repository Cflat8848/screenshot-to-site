import { useState } from "react";
import { Product } from "@/data/products";
import { X, Droplets, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className="relative bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-secondary hover:bg-primary/20 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>

        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
          {/* Product Image */}
          <div className="relative aspect-square bg-gradient-to-br from-secondary to-background rounded-xl flex items-center justify-center">
            <Droplets className="w-32 h-32 text-primary/40" />
            {/* Future: Replace with actual product image */}
            {/* <img src={product.image} alt={product.name} className="object-contain" /> */}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span>{product.category}</span>
              <ChevronRight className="w-4 h-4" />
              <span>{product.subCategory}</span>
            </div>

            {/* Product Name */}
            <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
              {product.name}
            </h2>

            {/* Specification */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Specification</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.specification}
              </p>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">Available Sizes</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 rounded-lg border-2 font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? "border-primary bg-primary/20 text-primary"
                        : "border-border bg-secondary hover:border-primary/50 text-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Button */}
            <div className="mt-auto pt-4">
              <Button 
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
              >
                <a href="#contact">Request Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
