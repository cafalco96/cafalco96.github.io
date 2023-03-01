import React from "react";
function useLocalStorage(itemName, initialItem) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  let [item, setItem] = React.useState(initialItem);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        let localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorageItem = localStorage.setItem(
            itemName,
            JSON.stringify(initialItem)
          );
          parsedItem = initialItem;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });

  let saveLocalStorageItem = (newItem) => {
    try {
      const toStringItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, toStringItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  return {
    item,
    saveLocalStorageItem,
    loading,
    error,
  };
}
export { useLocalStorage };
