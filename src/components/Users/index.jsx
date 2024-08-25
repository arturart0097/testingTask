import Filter from "./Filter";
import "./style.css";
import UsersList from "./UsersList";

export default function Users() {
  return (
    <main>
      <div className="content">
        <div className="content__title">
          <h2>USERS</h2>
        </div>
        <div className="content__user">
          <p>
            Please add at least 3 departmetns to be able to proceed next steps.
          </p>
          <Filter />
        </div>
        <UsersList />
      </div>
    </main>
  );
}
