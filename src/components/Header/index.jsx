import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <NavLink
        to="/edit-user"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <button>Edit User</button>
      </NavLink>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <button>Users</button>
      </NavLink>
    </header>
  );
}
