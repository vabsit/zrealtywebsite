export type DateFormatStartEnd = 'start' | 'end' | 'current';
export const getDateOrConvertDateTime = (date?: Date, format?: DateFormatStartEnd) => {

    const originalFormate = format ? format : "";
    const originalDate = date ? date : new Date();
    const currentDate = new Date();
  
    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(originalDate.getDate()).padStart(2, '0');
    const hours = originalFormate === 'start' ? '00' : originalFormate === 'end' ? '23' : originalFormate === 'current' ?  String(currentDate.getHours()).padStart(2, '0') : String(originalDate.getHours()).padStart(2, '0');
    const minutes = originalFormate === 'start' ? '00' : originalFormate === 'end' ? '59' : originalFormate === 'current' ?  String(currentDate.getMinutes()).padStart(2, '0') : String(originalDate.getMinutes()).padStart(2, '0');
    const seconds = originalFormate === 'start' ? '00' : originalFormate === 'end' ? '59' : originalFormate === 'current' ?  String(currentDate.getSeconds()).padStart(2, '0') : String(originalDate.getSeconds()).padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    return formattedDate;
  };