import { Service } from "../types";

export function sortByCategory(services: Service[]): { [key: string]: Service[] } {

  const categorizedServices: { [key: string]: Service[] } = {};

  services.forEach(service => {
    if (!categorizedServices[service.category]) {
      categorizedServices[service.category] = [];
    }
    categorizedServices[service.category].push(service);
  });

  return categorizedServices;
}
