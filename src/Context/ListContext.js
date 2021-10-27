import React, { createContext, useEffect, useState } from "react";

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [lists, setLists] = useState(
    JSON.parse(localStorage.getItem("lists")) || []
  );

  useEffect(() => {
    lists.sort((a, b) => new Date(a.date) - new Date(b.date));
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  return (
    <ListContext.Provider value={{ lists, setLists }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListContext;
