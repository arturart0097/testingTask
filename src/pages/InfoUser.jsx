import { useNavigate, useParams } from "react-router-dom";
import useGetDataUsers from "../features/dataHook/get/getData";
import { postService } from "../features/services/data.service"; 

export default function InfoUser() {
  const { id } = useParams();
  const { user, isLoading } = useGetDataUsers(postService.getUser());
  const navigate = useNavigate()

  if (isLoading) {
    return <p>asdfadsf</p>;
  }

  const arr = user.Items.find((el) => el.Id == id);

  console.log(arr);

  return (
    <>
      <h1>
        {arr.FirstName} {arr.LastName} {arr.SecondName}
      </h1>
      <button onClick={() => navigate("/")}>back</button>
    </>
  );
}
