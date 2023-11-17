// SaveToLocalStorage.tsx
import { useEffect } from "react";

interface SaveToLocalStorageProps {
  storageKey: string;
  data: any;
  pagination?: boolean;
}

const SaveToLocalStorage: React.FC<SaveToLocalStorageProps> = ({
  storageKey,
  data,
  pagination,
}) => {
  useEffect(() => {
    const storedData = JSON.parse(
      (localStorage.getItem(storageKey) as string) || "[]",
    );

    if (pagination) {
      const paginationExists = storedData.includes(data);

      if (!paginationExists) {
        storedData.push(data);
        localStorage.setItem(storageKey, JSON.stringify(storedData));
      }
    } else {
      const existingDataIndex = storedData.findIndex(
        (item: any) => item.id === data.id,
      );

      if (existingDataIndex !== -1) {
        storedData.splice(existingDataIndex, 1);
      }

      storedData.push(data);
      localStorage.setItem(storageKey, JSON.stringify(storedData));
    }
  }, [storageKey, data, pagination]);

  return null;
};

export default SaveToLocalStorage;
