export const dataFormatText = (data: any) => {
  const formatText = (text: string) => {
    return text.charAt(0).toUpperCase() + text.toLowerCase().slice(1);
  };

  const marqueTextFormated = data.map((item: any) => ({
    marque: formatText(item.marque),
    modele: formatText(item.modele),
    energie: formatText(item.energie),
    carrosserie: formatText(item.carrosserie),
  }));

  return marqueTextFormated;
};
