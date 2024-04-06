import React from "react";
import { Service } from "../../../types/Service"
import { sortByCategory } from "../../../utils/sort";
import CategoryRow from "./CategoryRow";


const CategoryTable: React.FC<{
  services: Service[];
}> = ({ services }) => {

  const categories: React.ReactNode[] = [];
  const sortedServices = sortByCategory(services);

  Object.entries(sortedServices).forEach(([category, services]) => {
    categories.push( // push another category row
      <CategoryRow
        category={category}
        services={services}
        key={category}
      />
    );
  });

  return (
    <div className="border border-blue-400 px-6 py-2">
      <h2 className="mt-4">
        <strong>
          Categorías
        </strong>
      </h2>
      {categories}
    </div>
  );
}

export default CategoryTable;
