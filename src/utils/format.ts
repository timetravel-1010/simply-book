import { DateTime } from "luxon";

export function formatDate(dateString: string): { longFormat: string, shortFormat: string } | null {
  try {
    const parsedDate = DateTime.fromISO(dateString);

    //const long = parsedDate.setLocale('es-CO').toFormat("dd 'de' MMMM");
    const monthName = capitalizeFirstLetter(parsedDate.setLocale('es-CO').toFormat('MMMM'));
    const longFormat = `${parsedDate.toFormat('dd')} de ${monthName}`;

    // Format the date in "24/4/2024" format
    const shortFormat = parsedDate.toFormat('dd/L/yyyy');

    return { longFormat, shortFormat };
  } catch (error) {
    console.error(error);
    return null;
  }
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
