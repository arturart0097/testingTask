import { useState, useEffect } from "react";
import { Countries, Departments, Statuses, Users } from "../../../assets/Data";
import MultipleSelect from "../../Selects/SelectMarkEditUser";
import Input from "../../UI/Input";
import "./style.css";

export default function Form({ onFormChange, initialData }) {
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState(initialData || {
    name: "",
    department: "",
    country: "",
    status: "",
  });
  const [initialFormData, setInitialFormData] = useState(initialData);

  useEffect(() => {
    if (initialData) {
      setInitialFormData(initialData);
      setFormData(initialData);
    }
  }, [initialData]);

  useEffect(() => {
    if (onFormChange) {
      onFormChange(formData);
    }
  }, [formData, onFormChange]);

  const handleUserChange = (name) => {
    const user = Users.find((u) => u.name === name);
    if (user) {
      setSelectedUser(user);
      const newFormData = {
        name: user.name,
        department: user.department?.name || "",
        country: user.country?.name || "",
        status: user.status?.name || "",
      };
      setFormData(newFormData);
      setInitialFormData(newFormData);
    }
  };
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const hasChanges = JSON.stringify(formData) !== JSON.stringify(initialFormData);

  return (
    <div className="form">
      <div className="form__userName">
        <label>User</label>
        <MultipleSelect
          names={Users.map((el) => el.name)}
          onChange={handleUserChange}
          value={formData.name}
        />
      </div>
      <div className="form__userInformation">
        <div className="form__userInformation-title">
          <h3>User Information</h3>
        </div>
        <div className="form__userInformation-row">
          <div className="form__userInformation-column">
            <label>Full Name</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form__userInformation-column">
            <label>Department</label>
            <MultipleSelect
              names={Departments.map((el) => el.name)}
              value={formData.department}
              onChange={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  department: value,
                }))
              }
            />
          </div>
        </div>
        <div className="form__userInformation-row">
          <div className="form__userInformation-column">
            <label>Country</label>
            <MultipleSelect
              names={Countries.map((el) => el.name)}
              value={formData.country}
              onChange={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  country: value,
                }))
              }
            />
          </div>
          <div className="form__userInformation-column">
            <label>Status</label>
            <MultipleSelect
              names={Statuses.map((el) => el.name)}
              value={formData.status}
              onChange={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  status: value,
                }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
