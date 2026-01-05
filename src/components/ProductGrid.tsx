import { useState } from "react";
import { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid = ({ products, title }: ProductGridProps) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      {title && (
        <h2 className="font-display text-2xl md:text-3xl text-primary mb-6">{title}</h2>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id}
            product={product} 
            onSelect={setSelectedProduct}
            animationDelay={index * 100}
          />
        ))}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProductGrid;
