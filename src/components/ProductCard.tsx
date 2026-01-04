import { useState } from "react";
import { Product } from "@/data/products";
import { Droplets } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCard = ({ product, onSelect }: ProductCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      onClick={() => onSelect(product)}
      className="group bg-card border border-border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-glow-gold hover:-translate-y-2 hover:border-primary/50"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-secondary/50 to-background flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {product.image ? (
          <>
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`w-full h-full object-contain p-4 drop-shadow-lg transition-all duration-500 group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
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
      </div>
    </div>
  );
};

export default ProductCard;
