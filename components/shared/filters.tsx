import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input, RangeSlider } from "../ui";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title
        text='Filter'
        size='sm'
        className='mb-5 font-bold pb-4 border-b border-b-neutral-100'
      />
      {/* Top checkboxes */}
      <div className='flex flex-col gap-4'>
        <FilterCheckbox
          text='You can select'
          value='1'
        />
        <FilterCheckbox
          text='New'
          value='2'
        />
      </div>

      {/* Filter price */}
      <div className='mt-10 border-y border-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Price from and to: </p>
        <div className='flex gap-3 mb-5'>
          <Input
            type='number'
            placeholder='0'
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input
            type='number'
            min={100}
            max={1000}
            placeholder='100'
            defaultValue={1000}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[0, 1000]}
        />
      </div>
      <CheckboxFiltersGroup
        title='Ingriedients'
        className='mt-5'
        limit={6}
        defaultItems={[{ text: "Sauce", value: "1" }]}
        items={[
          { text: "Sauce", value: "1" },
          { text: "Sauce", value: "1" },
          { text: "Sauce", value: "1" },
          { text: "Sauce", value: "1" },
          { text: "Sauce", value: "1" },
          { text: "Sauce", value: "1" },
          { text: "Sauce", value: "1" },
        ]}
      />
    </div>
  );
};
