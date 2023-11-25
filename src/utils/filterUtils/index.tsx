export const getFilteredData = ({ data, manufacturer, model }: any) => {
  return data?.filter((car: any) => {
    if (manufacturer && model) {
      return (
        car.marque.toString().toLowerCase().includes(manufacturer) &&
        car.modele.toString().toLowerCase().includes(model)
      );
    }
    if (manufacturer) {
      return car.marque.toString().toLowerCase().includes(manufacturer) || "";
    }
    if (model) {
      return car.modele.toString().toLowerCase().includes(model) || "";
    }
    return true;
  });
};

export const paginateData = ({ data, start, end }: any) => {
  return data?.slice(start, end);
};
