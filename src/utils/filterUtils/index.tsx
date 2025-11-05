export const getFilteredData = ({ data, manufacturer, model, fuel, year }: any) => {
  if (!data || !Array.isArray(data)) return [];
  
  return data.filter((car: any) => {
    // Filter by manufacturer
    const matchesManufacturer = !manufacturer || manufacturer === ""
      ? true
      : car.marque?.toString().toLowerCase().includes(manufacturer.toString().toLowerCase());
    
    // Filter by model
    const matchesModel = !model || model === ""
      ? true
      : car.modele?.toString().toLowerCase().includes(model.toString().toLowerCase());
    
    // Filter by fuel
    const matchesFuel = !fuel || fuel === ""
      ? true
      : car.energie?.toString().toLowerCase() === fuel.toString().toLowerCase();
    
    // Filter by year (year should be >= selected year)
    const matchesYear = !year || year === "" || year === 0
      ? true
      : Number(car.anneemodele) >= Number(year);

    return matchesManufacturer && matchesModel && matchesFuel && matchesYear;
  });
};

export const paginateData = ({ data, start, end }: any) => {
  return data?.slice(start, end);
};
