import { useState, useEffect } from "react";

type SessionStorageValue<T> = T | null;

function useSessionStorage<T>(key: string, initialValue: T | object): [SessionStorageValue<T>, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<SessionStorageValue<T>>(() => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useSessionStorage;
