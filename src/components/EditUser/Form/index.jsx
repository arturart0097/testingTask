import { Countries, Departments, Statuses, Users } from "../../../assets/Data";
import MultipleSelect from "../../Selects/SelectMarkEditUser";
import Input from "../../UI/Input";
import "./style.css";

export default function Form() {
  return (
    <div className="form">
      <div className="form__userName">
        <label>User</label>
        <MultipleSelect names={Users.map((el) => el.name)} />
      </div>
      <div className="form__userInformation">
        <div className="form__userInformation-title">
          <h3>User Information</h3>
        </div>
        <div className="form__userInformation-row">
          <div className="form__userInformation-column">
            <label>Full Name</label>
            <Input />
          </div>
          <div className="form__userInformation-column">
            <label>Department</label>
            <MultipleSelect names={Departments.map((el) => el.name)} />
          </div>
        </div>
        <div className="form__userInformation-row">
          <div className="form__userInformation-column">
            <label>Country</label>
            <MultipleSelect names={Countries.map((el) => el.name)} />
          </div>
          <div className="form__userInformation-column">
            <label>Status</label>
            <MultipleSelect names={Statuses.map((el) => el.name)} />
          </div>
        </div>
      </div>
    </div>
  );
}
