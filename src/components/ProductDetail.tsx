import { useState, useEffect } from "react";
import { Product, formatSize } from "@/data/products";
import { X, Droplets, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageAnimating, setImageAnimating] = useState(false);
  const hasMultipleSizes = product.sizes.length > 1;
  
  // Get image for current selected size
  const getImageForSize = (size: string) => {
    if (product.sizeImages && product.sizeImages[size]) {
      return product.sizeImages[size];
    }
    return product.imageDetail || product.image;
  };
  
  const displayImage = getImageForSize(selectedSize);

  // Handle size change with animation
  const handleSizeChange = (size: string) => {
    if (size === selectedSize) return;
    
    setImageAnimating(true);
    setImageLoaded(false);
    
    setTimeout(() => {
      setSelectedSize(size);
      setImageAnimating(false);
    }, 150);
  };

  // Reset image loaded state when product changes
  useEffect(() => {
    setImageLoaded(false);
    setSelectedSize(product.sizes[0]);
  }, [product]);

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
          <div className="relative aspect-square bg-gradient-to-br from-secondary/50 to-background rounded-xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
            
            {displayImage ? (
              <>
                <img
                  src={displayImage}
                  alt={`${product.name} - ${formatSize(selectedSize, product.unit)}`}
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-contain p-6 drop-shadow-xl transition-all duration-300 ${
                    imageLoaded && !imageAnimating 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95"
                  }`}
                />
                {(!imageLoaded || imageAnimating) && (
                  <Droplets className="absolute w-32 h-32 text-primary/40 animate-pulse" />
                )}
              </>
            ) : (
              <Droplets className="w-32 h-32 text-primary/40 animate-pulse" />
            )}
            
            {/* Price badge */}
            {product.prices && product.prices[selectedSize] && (
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
                Nrs. {product.prices[selectedSize].toLocaleString()}
              </div>
            )}
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

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Available {hasMultipleSizes ? "Sizes" : "Size"}
              </h3>
              
              {hasMultipleSizes ? (
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeChange(size)}
                      className={`px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg border-2 font-medium transition-all duration-200 text-sm sm:text-base ${
                        selectedSize === size
                          ? "border-primary bg-primary/20 text-primary shadow-glow-gold scale-105"
                          : "border-border bg-secondary hover:border-primary/50 text-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {formatSize(size, product.unit)}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="inline-block px-6 py-3 rounded-lg border-2 border-primary bg-primary/20 text-primary font-medium">
                  {formatSize(product.sizes[0], product.unit)}
                </div>
              )}
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