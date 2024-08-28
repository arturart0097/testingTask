import React, { useState, useEffect, useRef } from "react";
import { useUserContext } from "../../assets/context";
import Form from "./Form";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function EditUser() {
  const { users, updateUser } = useUserContext();
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    country: "",
    status: "",
  });
  const [initialFormData, setInitialFormData] = useState({
    name: "",
    department: "",
    country: "",
    status: "",
  });
  const refFormData = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    setInitialFormData({
      name: "",
      department: "",
      country: "",
      status: "",
    });
    setFormData({
      name: "",
      department: "",
      country: "",
      status: "",
    });
  }, []);

  useEffect(() => {
    refFormData.current = formData;
  }, [formData.name]);

  console.log(formData);
  console.log(refFormData.current);

  const handleFormChange = (data) => {
    setFormData(data);
  };

  const hasChanges =
    JSON.stringify(formData) !== JSON.stringify(initialFormData);

  const isFormValid = Object.values(formData).every(
    (value) => typeof value === "string" && value.trim() !== ""
  );

  const isSaveEnabled =
    hasChanges && isFormValid && refFormData.current !== formData;

  const handleSave = () => {
    if (isSaveEnabled) {
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
      refFormData.current = formData;

      navigate("/");
    }
  };

  const handleUndo = () => {
    setInitialFormData(refFormData.current);
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
            <button
              onClick={handleUndo}
              style={{ visibility: hasChanges ? "visible" : "hidden" }}
            >
              Undo
            </button>
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
