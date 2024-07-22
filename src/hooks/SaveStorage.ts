import { useState } from "react";

export default function useLocalStorage(key: string, initialValue: boolean) {
  const [stored, setStored] = useState<boolean>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setValue = (value: boolean) => {
    try {
      setStored(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(err);
    }
  };

  return [stored, setValue] as const;
}
