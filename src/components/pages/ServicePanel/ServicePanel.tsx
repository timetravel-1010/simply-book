import { getServices } from "../../../services/services";
import CategoryTable from "./CategoryTable";

const ServicePanel: React.FC<{
}> = () => {
  const services = getServices();

  return (
    <CategoryTable
      services={services}
    />
  );
}

export default ServicePanel;
