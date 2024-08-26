import { useState } from "react";
import Filter from "./Filter";
import "./style.css";
import UsersList from "./UsersList";

export default function Users() {
  const [filters, setFilters] = useState({
    departments: [],
    countries: [],
    statuses: [],
  });

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <main>
      <div className="content">
        <div className="content__title">
          <h2>USERS</h2>
        </div>
        <div className="content__user">
          <p>
            Please add at least 3 departments to be able to proceed to the next steps.
          </p>
          <Filter onFiltersChange={handleFiltersChange} />
        </div>
        <UsersList filters={filters} />
      </div>
    </main>
  );
}
