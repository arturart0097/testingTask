import React from "react";
import { useUserContext } from "../../../assets/context";
import "./style.css";

export default function UsersList() {
  const { users, filters, updateUser } = useUserContext();
  const { departments, countries, statuses } = filters;

  const filteredUsers = users.filter((user) => {
    const departmentMatch =
      departments.length === 0 || departments.includes(user.department.name);
    const countryMatch =
      countries.length === 0 || countries.includes(user.country.name);
    const statusMatch =
      statuses.length === 0 || statuses.includes(user.status.name);

    return departmentMatch && countryMatch && statusMatch;
  });

  const deleteUserHandler = (userName) => {
    const updatedUsers = users.filter((user) => user.name !== userName);
    updateUser(updatedUsers);
  };

  return (
    <div className="content__userList">
      <div className="content__userList-title">
        <div className="content__userList-title-fullName">
          <h5>Full Name</h5>
        </div>
        <div className="content__userList-title-department">
          <h5>Department</h5>
        </div>
        <div className="content__userList-title-country">
          <h5>Country</h5>
        </div>
        <div className="content__userList-title-status">
          <h5>Status</h5>
        </div>
      </div>
      {filteredUsers.length !== 0 ? (
        filteredUsers.map((el) => (
          <div className="content__userList-dataUser" key={el.name}>
            <div className="content__userList-title-fullName">
              <p>{el.name}</p>
            </div>
            <div className="content__userList-title-department">
              <p>{el.department.name}</p>
            </div>
            <div className="content__userList-title-country">
              <p>{el.country.name}</p>
            </div>
            <div className="content__userList-title-status">
              <p>{el.status.name}</p>
            </div>
            <button
              onClick={() => deleteUserHandler(el.name)}
              className="content__userList-deleteUser"
            >
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
        ))
      ) : (
        <p style={{ textAlign: "center" }}>Not found</p>
      )}
    </div>
  );
}
