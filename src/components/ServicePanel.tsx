import { Shift } from "../types/Shift"
import CategoryTable from "./CategoryTable";

const BookingPanel: React.FC<{
}> = () => {

  return (
    <>
      <h1 className='text-lg font-bold'>Seleccionar servicio</h1>
      <CategoryTable
        services={servicesResponse.services}
      />
    </>
  );
}

const servicesResponse = {
  "services": [
    {
      "id": 1,
      "name": "Classic Manicure",
      "description": "Includes filing, moisturizing, and permanent polish application.",
      "category": "Hands and Feet"
    },
    {
      "id": 2,
      "name": "Spa Pedicure",
      "description": "Spa pedicure with paraffin bath for soft and relaxed feet.",
      "category": "Hands and Feet"
    },
    {
      "id": 3,
      "name": "Cut and Style",
      "description": "Custom haircut plus washing and styling.",
      "category": "Hair"
    },
    {
      "id": 4,
      "name": "Full Color",
      "description": "Full hair coloring with ammonia-free products.",
      "category": "Hair"
    },
    {
      "id": 5,
      "name": "Deep Tissue Massage",
      "description": "Intense massage to alleviate muscle tension.",
      "category": "Massage and Spa"
    },
    {
      "id": 6,
      "name": "Anti-Aging Facial",
      "description": "Rejuvenating facial treatment with natural products.",
      "category": "Facial Care"
    },
    {
      "id": 7,
      "name": "Waxing",
      "description": "Body waxing for smooth, hair-free skin.",
      "category": "Hair Removal"
    },
    {
      "id": 8,
      "name": "Hair Treatment",
      "description": "Repairing treatment for damaged or dyed hair.",
      "category": "Hair"
    },
    {
      "id": 9,
      "name": "Professional Makeup",
      "description": "Makeup services for special events.",
      "category": "Makeup"
    },
    {
      "id": 10,
      "name": "Facial Cleansing",
      "description": "Deep cleansing with impurity extraction and mask application.",
      "category": "Facial Care"
    }
    // More services can be added as needed
  ]
}


const availableSlots: Shift = {
  "date": "2024-04-26",
  "serviceId": 3,
  "availableTimeslots": [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00"
  ]
}

export default BookingPanel;
