import React from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  products: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  products,
  className,
  listClassName,
  categoryId,
}) => {
  return (
    <div
      className={className}
      id={title}
    >
      <Title
        text={title}
        size='lg'
        className='font-extrabold mb-5'
      />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
        {products
          .filter(product => product.items.length > 0)
          .map((product, i) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.items[0].price}
            />
          ))}
      </div>
    </div>
  );
};
