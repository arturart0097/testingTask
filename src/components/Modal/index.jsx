import { useState } from "react";
import { createPortal } from "react-dom";
import "./style.css";
import Input from "../UI/Input";
import { Countries, Departments, Statuses } from "../../assets/Data.js";
import { useUserContext } from "../../assets/context/index.jsx";
import ModalSelect from "../Selects/ModalSelect/index.jsx";

function Modal({ onShow }) {
  const { users, updateUser } = useUserContext();
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    country: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      name: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: formData.name,
      department: { name: formData.department },
      country: { name: formData.country },
      status: { name: formData.status },
    };
    updateUser([...users, newUser]);
    setFormData({ name: "", department: "", country: "", status: "" }); // Reset form
    onShow();
  };

  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="modal">
        <h2>Add User</h2>
        <form method="dialog" onSubmit={handleSubmit}>
          <div className="modal__form-row">
            <div className="form__userInformation-column">
              <label>Full Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                width={280}
              />
            </div>
            <div className="form__userInformation-column">
              <label>Department</label>
              <ModalSelect
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
          <div className="modal__form-row">
            <div className="form__userInformation-column">
              <label>Country</label>
              <ModalSelect
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
              <ModalSelect
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
          <div className="modal__buttons">
            <button type="button" onClick={() => onShow()}>
              Cancel
            </button>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
