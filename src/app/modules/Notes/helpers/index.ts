export const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}/${month + 1}/${year}`;
};

export const formatHours = (date: Date) => {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  return `${hours}:${minutes} ${ampm}`;
};

export const formatNoteDate = (date: string) => {
  const oldDate = new Date(date);
  const currentDate = new Date();
  const formatedOldDate = formatDate(oldDate);
  if (formatedOldDate !== formatDate(currentDate)) {
    return formatedOldDate;
  }
  return formatHours(oldDate);
};
