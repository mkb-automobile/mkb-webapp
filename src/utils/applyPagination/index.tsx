import { getFilteredData, paginateData } from "../filterUtils";

export function applyPagination({
  data,
  manufacturer,
  model,
  page,
  elementPerPage,
}: any) {
  const startPage = (page - 1) * elementPerPage;
  const endPAge = startPage + elementPerPage;

  const dataFilter = getFilteredData({ data, manufacturer, model });
  const dataFilterWithPaginatin = paginateData({
    data: dataFilter,
    start: startPage,
    end: endPAge,
  });

  const nbPages = Math.ceil(dataFilter?.length / elementPerPage);
  const pagesNumbers = Array.from({ length: nbPages }, (_, i) => i + 1);

  return { dataFilterWithPaginatin, nbPages, pagesNumbers };
}
