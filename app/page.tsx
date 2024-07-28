import { Container, TopBar } from "@/components/shared";
import { Title } from "@/components/shared";
import { Filters } from "@/components/shared/";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title
          text='All pizzas'
          size='lg'
          className='font-extrabold'
        />
      </Container>
      <TopBar />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/* Filter */}
          <div className='w-[250px]'>
            <Filters />
          </div>
          {/* Product List */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title={"Pizzas"}
                products={[
                  {
                    id: 1,
                    name: "Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                    price: 15,
                    items: [{ price: 30 }],
                  },
                  {
                    id: 2,
                    name: "Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                    price: 15,
                    items: [{ price: 30 }],
                  },
                  {
                    id: 3,
                    name: "Pizza",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF01FD3C2AC8E791770181C4A9C04D.avif",
                    price: 15,
                    items: [{ price: 30 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title={"Combo"}
                products={[
                  {
                    id: 4,
                    name: "Summer Combo",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF168E1ECEE160827BC0ADE723E700.avif",
                    price: 25,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 5,
                    name: "Summer Combo",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF168E1ECEE160827BC0ADE723E700.avif",
                    price: 25,
                    items: [{ price: 15 }],
                  },
                  {
                    id: 6,
                    name: "Summer Combo",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EF168E1ECEE160827BC0ADE723E700.avif",
                    price: 25,
                    items: [{ price: 15 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
