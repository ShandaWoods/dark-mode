import React, { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  //key is a string
  // value is anyting

  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
      setStoredValue(value);

      window.localStorage.setItem(key, JSON.stringify(value))
  }
  
  return [storedValue];
};
