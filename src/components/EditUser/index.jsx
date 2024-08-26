import Form from "./Form";
import "./style.css";

export default function EditUser() {
  return (
    <main>
      <div className="contentUserEdit">
        <div className="content__title">
          <h2>EDIT USER</h2>
        </div>
        <div className="content__form">
          <Form />
        </div>
        <div className="content__buttons">
          <div className="content__buttons-undo">
            <button>Undo</button>
          </div>
          <div className="content__buttons-save">
            <button>Save</button>
          </div>
        </div>
      </div>
    </main>
  );
}
