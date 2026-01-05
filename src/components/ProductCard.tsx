import { useState, useEffect } from "react";
import { Product } from "@/data/products";
import { Droplets } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  animationDelay?: number;
}

const ProductCard = ({ product, onSelect, animationDelay = 0 }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), animationDelay);
    return () => clearTimeout(timer);
  }, [animationDelay]);

  // Get the first available image for card display
  const cardImage = product.image || (product.sizeImages ? Object.values(product.sizeImages)[0] : undefined);

  return (
    <div
      onClick={() => onSelect(product)}
      className={`group bg-card border border-border rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-glow-gold hover:-translate-y-2 hover:border-primary/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-secondary/50 to-background flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {cardImage ? (
          <>
            <img
              src={cardImage}
              alt={product.name}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-contain p-4 drop-shadow-lg transition-all duration-500 group-hover:scale-105 ${
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            />
            {!imageLoaded && (
              <Droplets className="absolute w-20 h-20 text-primary/30 animate-pulse" />
            )}
          </>
        ) : (
          <Droplets className="w-20 h-20 text-primary/30 group-hover:text-primary/50 transition-all duration-300 group-hover:scale-110" />
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            View Details
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {product.description}
        </p>
        
        {/* Size pills */}
        {product.sizes.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {product.sizes.map((size) => (
              <span 
                key={size} 
                className="px-2 py-0.5 text-xs bg-secondary text-muted-foreground rounded-full border border-border"
              >
                {size} {product.unit}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;