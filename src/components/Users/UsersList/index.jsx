import { Users } from "../../../assets/Data";
import "./style.css";

export default function UsersList() {
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
      {Users.map((el) => (
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
          <button className="content__userList-deleteUser">
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
      ))}
    </div>
  );
}
