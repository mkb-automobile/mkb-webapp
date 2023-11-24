import { isEqual } from "lodash";

interface saveToLocalStorageProps {
  storageKey: string;
  data: any;
}

/**
 * @param {saveToLocalStorageProps} props - The props of the component
 * @param {string} storageKey - The key to use to store the data in localStorage
 * @param {any} data - The data to store in localStorage
 */

export const saveToLocalStorage = ({
  storageKey,
  data,
}: saveToLocalStorageProps) => {
  // if data is in localStorage, get it or return an empty array
  const storedData = JSON.parse(
    (localStorage.getItem(storageKey) as string) || "[]",
  );

  // check if data is already in localStorage
  const dataExists = storedData.some((item: any) => isEqual(item, data));

  // if data is not in localStorage, add it
  if (!dataExists) {
    storedData.push(data);
    localStorage.setItem(storageKey, JSON.stringify(storedData));
  }
};

export const savePageVisitedToLocalStorage = (page: string) => {
  const visitedPages = JSON.parse(localStorage.getItem("visitedPages") ?? "[]");

  const pageExists = visitedPages.some((item: string) => isEqual(item, page));

  if (!pageExists) {
    visitedPages.push(page);
    localStorage.setItem("visitedPages", JSON.stringify(visitedPages));
  }
};
