import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div id="error-page">
      <h1>Not Found Page</h1>
      <button className="error-page__button" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}
