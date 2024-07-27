/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import Link from "next/link";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <Link href={`/product/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img
            className='w-[215px] h-[215px]'
            src={imageUrl}
            alt={name}
          />
        </div>

        <Title
          text={name}
          size='sm'
          className='mb-1 mt-3 font-bold'
        />

        <p className='text-sm text-gray-400'>
          Shrimp, pineapple, sweet chili sauce, sweet pepper, mozzarella,
          alfredo&apos;s signature sauce
        </p>

        <div className='flex justify-between items-center mt-4'>
          <span className='text-[20px]'>
            from <b>20$</b>
          </span>

          <Button
            variant='secondary'
            className='text-base font-bold'
          >
            <Plus
              size={20}
              className='mr-1'
            />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};