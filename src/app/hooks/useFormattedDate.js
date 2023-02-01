import format from "date-fns/format";

export const useFormattedDate = (date) => {
  if (date) {
    return format(new Date(date), "yyyy-mm-dd hh:mm:ss");
  }
};
