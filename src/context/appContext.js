import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {

  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem("categories");
    return saved ? JSON.parse(saved) : []; 
  });

 
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]); 

  return (
    <AppContext.Provider value={{ categories, setCategories }}>
      {children}
    </AppContext.Provider>
  );
}
