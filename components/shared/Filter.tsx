import React from "react";
import { cn } from "@/lib/utils";
import { TFilters } from "@/types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type TFilterProps = {
  filters: TFilters[]
  className?: string
  containerClasses?: string
}

const Filter = ({ filters, className, containerClasses }: TFilterProps) => {
  return <section className={cn('relative', containerClasses)}>
    <Select>
      <SelectTrigger className={cn('body-regular background-light800_dark300 text-dark500_light700 px-5 py-2.5 border-0', className)}>
        <div className="line-clamp-1 flex-1 text-left">
          <SelectValue placeholder="Select a filter" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {filters.map(filter => (
          <SelectItem key={filter.value} value={filter.value} className="background-light800_dark300 text-dark500_light700">{filter.name}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  </section>;
};

export default Filter;
