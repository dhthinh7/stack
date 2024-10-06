'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { homePageFilters } from "@/constants/filters";
import { cn } from "@/lib/utils";

const HomeFilters = () => {
  const [active, setActive] = useState<string>('')

  return <div className="mt-10 flex-wrap gap-3 flex lg:hidden">
    {homePageFilters.map(filter => (
      <Button key={filter.value} className={cn('body-medium rounded-lg px-6 py-3 capitalize shadow-none', active === filter.value ? 'bg-primary-100 text-primary-500 hover:bg-primary-500/20' : 'bg-light-800 text-light-500 hover:bg-light-700 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300')} onClick={() => setActive(filter.value)}>
        {filter.name}
      </Button>
    ))}
  </div>;
};

export default HomeFilters;
