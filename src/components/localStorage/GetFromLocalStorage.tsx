export function getFromLocalStorage(key: string) {
  try {
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return null;
  }
}
