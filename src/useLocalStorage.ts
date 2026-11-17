import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // The function runs only on the first render
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
