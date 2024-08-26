import React, { createContext, useState, useContext } from "react";
import { Users as initialUsers } from "../Data";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState(initialUsers);
  const [filters, setFilters] = useState({
    departments: [],
    countries: [],
    statuses: [],
  });

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const updateUser = (updatedUsers) => {
    console.log("Updating users:", updatedUsers);
    setUsers(updatedUsers);
  };
  

  return (
    <UserContext.Provider value={{ users, filters, updateFilters, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
