export const formatDate = (date) => {
    const [ano, mes, dia] = date ? date.split("-") : "";
    const convertedDate = new Date(ano, mes - 1, dia);
    const formatedDate = isNaN(convertedDate)
      ? ""
      : Intl.DateTimeFormat("pt-Br").format(convertedDate);
    return formatedDate;
  };
  