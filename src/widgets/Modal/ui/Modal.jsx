import { createPortal } from "react-dom";
import "./style.css";

function Modal({ title }) {
  const handleReload = () => {
    window.location.reload();
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
        <h2>{title}</h2>
        <button onClick={() => handleReload()}>reload page</button>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
