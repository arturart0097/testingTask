import React, { useState, useEffect } from "react";
import { useUserContext } from "../../assets/context";
import Form from "./Form";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function EditUser() {
  const { users, updateUser } = useUserContext();
  const [formData, setFormData] = useState(null);
  const [initialFormData, setInitialFormData] = useState(null);
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    // Fetch the user data based on some identifier, e.g., userId from params
    const exampleInitialData = {
      name: "",
      department: "",
      country: "",
      status: "",
    };

    setInitialFormData(exampleInitialData);
    setFormData(exampleInitialData);
  }, []);

  const handleFormChange = (data) => {
    setFormData(data);
  };

  const hasChanges =
    initialFormData &&
    formData &&
    JSON.stringify(formData) !== JSON.stringify(initialFormData);

  const isFormValid =
    formData &&
    Object.values(formData).every(
      (value) => typeof value === "string" && value.trim() !== ""
    );

  const isSaveEnabled = hasChanges && isFormValid;

  const handleSave = () => {
    if (isSaveEnabled) {
      console.log("Saving user data:", formData);

      const updatedUsers = users.map((user) =>
        user.name === formData.name
          ? {
              ...user,
              status: {
                name: formData.status,
                value: formData.status.toUpperCase().slice(0, 2),
              },
              department: {
                name: formData.department,
                value: formData.department.toUpperCase().slice(0, 2),
              },
              country: {
                name: formData.country,
                value: formData.country.toUpperCase().slice(0, 2),
              },
            }
          : user
      );

      updateUser(updatedUsers);

      setInitialFormData({
        name: formData.name,
        status: {
          name: formData.status,
          value: formData.status.toUpperCase().slice(0, 2),
        },
        department: {
          name: formData.department,
          value: formData.department.toUpperCase().slice(0, 2),
        },
        country: {
          name: formData.country,
          value: formData.country.toUpperCase().slice(0, 2),
        },
      });

      // Navigate to the home page after saving
      navigate("/");
    }
  };

  const handleUndo = () => {
    setFormData(initialFormData);
  };

  return (
    <main>
      <div className="contentUserEdit">
        <div className="content__title">
          <h2>EDIT USER</h2>
        </div>
        <div className="content__form">
          <Form onFormChange={handleFormChange} initialData={initialFormData} />
        </div>
        <div className="content__buttons">
          <div className="content__buttons-undo">
            <button onClick={handleUndo}>Undo</button>
          </div>
          <div className="content__buttons-save">
            <button
              onClick={handleSave}
              disabled={!isSaveEnabled}
              style={{ color: isSaveEnabled ? "#000" : "#C4C4C4" }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
