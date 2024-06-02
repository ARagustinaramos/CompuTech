import { useEffect, useState } from "react";

export const saveCartToLocalStorage = (cartItems) => {
    try {
        const serializedCartItems = JSON.stringify(cartItems);
        localStorage.setItem('cartItems', serializedCartItems);
    } catch (error) {
        console.error('Could not save cart items to localStorage:', error);
    }
};

export const loadCartFromLocalStorage = () => {
    try {
        const serializedCartItems = localStorage.getItem('cartItems');
        if (serializedCartItems === null) {
            return [];
        }
        return JSON.parse(serializedCartItems).map(item => ({
            ...item,
            quantity: item.quantity ?? 1, 
        }));
    } catch (error) {
        console.error('Could not load cart items from localStorage:', error);
        return [];
    }
};


export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key) {
        setStoredValue(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error al guardar datos en localStorage:", error);
    }
  };

  return [storedValue, setValue];
}