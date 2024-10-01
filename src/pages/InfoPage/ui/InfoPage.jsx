import { useNavigate, useParams } from "react-router-dom";
import { useGetUserInfo } from "../../../shared/lib/hooks/getUsersInfo";

export default function InfoPage() {
  const { id } = useParams();
  const { data } = useGetUserInfo(id);
  const navigate = useNavigate();

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
          {data?.FirstName}
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
          {data?.LastName}
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
          {data?.SecondName}
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
