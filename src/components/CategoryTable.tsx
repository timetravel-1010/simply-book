import React from "react";
import { Service } from "../types/Service"
import CategoryRow from "./CategoryRow";


const CategoryTable: React.FC<{
  services: Service[];
}> = ({ services }) => {

  const categories: React.ReactNode[] = [];
  const sortedServices = sortByCategory(services);


  Object.entries(sortedServices).map(([category, services]) => {
    categories.push( // push another category row
      <CategoryRow
        category={category}
        services={services}
        key={category}
      />
    );
  });

  return (
    <div className="border border-blue-400 px-6 py-8">
      <h2 className="">
        <strong>
          Categorías
        </strong>
      </h2>
      {categories}
    </div>
  );
}

export default CategoryTable;

function sortByCategory(services: Service[]): { [key: string]: Service[] } {
  // Create an object to store services categorized by their category
  const categorizedServices: { [key: string]: Service[] } = {};

  // Iterate through the services array
  services.forEach(service => {
    // If the category doesn't exist in the categorizedServices object, create it
    if (!categorizedServices[service.category]) {
      categorizedServices[service.category] = [];
    }
    // Push the service into the corresponding category array
    categorizedServices[service.category].push(service);
  });
  //console.log(categorizedServices);
  return categorizedServices;

  // Initialize an empty array to store the sorted services
  //const sortedServices: Service[] = [];

  // Iterate through the keys (categories) of categorizedServices object
  //Object.keys(categorizedServices).forEach(category => {
  // Push each service from the corresponding category array into the sortedServices array
  //  sortedServices.push(...categorizedServices[category]);
  //});

  // Return the sorted services array
  //return sortedServices;

}

