import { useState } from "react";
import { Countries, Departments, Statuses } from "../../../assets/Data";
import MultipleSelectCheckmarks from "../../../components/Selects/SelectMarksUsers";
import "./style.css";

export default function Filter({ onFiltersChange }) {
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleDepartmentsChange = (selected) => {
    setSelectedDepartments(selected);
    if (selected.length < 3) {
      setSelectedCountries([]);
      setSelectedStatuses([]);
    }
    onFiltersChange({
      departments: selected,
      countries: selectedCountries,
      statuses: selectedStatuses,
    });
  };

  const handleCountriesChange = (selected) => {
    if (selectedDepartments.length >= 3) {
      setSelectedCountries(selected);
      onFiltersChange({
        departments: selectedDepartments,
        countries: selected,
        statuses: selectedStatuses,
      });
    }
  };

  const handleStatusesChange = (selected) => {
    if (selectedDepartments.length >= 3) {
      if (selected === "All Statuses") {
        setSelectedStatuses(["Active", "Disabled"]);
      } else {
        setSelectedStatuses(selected);
      }

      onFiltersChange({
        departments: selectedDepartments,
        countries: selectedCountries,
        statuses:
          selected === "All Statuses" ? ["Active", "Disabled"] : selected,
      });
    }
  };

  return (
    <div className="content__user-filter-container">
      <div className="content__user-managment">
        <div className="content__user-managment-filter">
          <MultipleSelectCheckmarks
            names={Departments.map((el) => el.name)}
            selectTitle="Departments"
            selectedNames={selectedDepartments}
            onChange={handleDepartmentsChange}
          />
          <MultipleSelectCheckmarks
            names={Countries.map((el) => el.name)}
            selectTitle="Countries"
            selectedNames={selectedCountries}
            onChange={handleCountriesChange}
            disabled={selectedDepartments.length < 3}
          />
          <MultipleSelectCheckmarks
            names={Statuses.map((el) => el.name)}
            selectTitle="Statuses"
            selectedNames={selectedStatuses}
            onChange={handleStatusesChange}
            disabled={selectedDepartments.length < 3}
          />
          <button className="content__user-managment-deleteIcon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 5V18C18 18.5304 17.7893 19.0391 17.4142 19.4142C17.0391 19.7893 16.5304 20 16 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V5H0V3H20V5H18ZM4 5V18H16V5H4ZM5 0H15V2H5V0Z"
                fill="#5E626B"
              />
            </svg>
          </button>
        </div>
        <div className="content__user-managment-addUser">
          <button>Add User</button>
        </div>
      </div>
    </div>
  );
}
