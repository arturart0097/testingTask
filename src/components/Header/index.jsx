import { NavLink } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <NavLink to="/edit-user">
        <button>Edit User</button>
      </NavLink>
      <NavLink to="/">
        <button>Users</button>
      </NavLink>
    </header>
  );
}
