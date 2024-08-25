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
        </div>
      ))}
    </div>
  );
}
