export const formatUtcDateToLocalTimeString = (date: string) => {
  return new Date(date).toLocaleTimeString();
};

export const formartUtcDateToLocalDateString = (date: string) => {
  return new Date(date).toLocaleDateString();
};
