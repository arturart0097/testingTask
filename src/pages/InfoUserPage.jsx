import { useNavigate, useParams } from "react-router-dom";
import { useGetDataUsers } from "../shared/lib/hooks/getDataTable";
import { postService } from "../shared/api/data.service";

export default function InfoUserPage() {
  const { id } = useParams();
  const { user } = useGetDataUsers(postService.getUser());
  const navigate = useNavigate();

  const arr = user.Items.find((el) => el.Id == id);

  return (
    <div style={{ padding: 20 }}>
      <h2>
        FirstName:
        <span
          style={{
            fontWeight: "normal",
            color: "#4c1",
          }}
        >
          {arr.FirstName}
        </span>
      </h2>
      <h2>
        LastName:
        <span
          style={{
            fontWeight: "normal",
            color: "#4c1",
          }}
        >
          {arr.LastName}
        </span>
      </h2>
      <h2>
        SecondName:
        <span
          style={{
            fontWeight: "normal",
            color: "#4c1",
          }}
        >
          {arr.SecondName}
        </span>
      </h2>
      <button
        style={{ width: "10%", height: 30, border: "none", background: "#4c1" }}
        onClick={() => navigate("/")}
      >
        back
      </button>
    </div>
  );
}
