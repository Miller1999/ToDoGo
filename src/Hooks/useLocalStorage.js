import { useState, useEffect } from "react";

function useLocalStorage(name, initialValue) {
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(name);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(name, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
      } catch {
        console.error();
      }
    }, 2000);
  }, []);
  const saveItem = (newItem) => {
    localStorage.setItem(name, JSON.stringify(newItem));
    setItem(newItem);
  };
  return { item, saveItem };
}

export default useLocalStorage;
