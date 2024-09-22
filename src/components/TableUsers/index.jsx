import { Fragment } from "react";
import { Link } from "react-router-dom";
import useGetDataColumn from "../../features/dataHook/get/getColumn";
import useGetDataUsers from "../../features/dataHook/get/getData";
import useGetDataAttendance from "../../features/dataHook/get/getAttendance";
import "./style.css";
import TableHeader from "./TableHeader";
import useMarkAbsence from "../../features/dataHook/post/postMarkAbsence";
import useMarkRemove from "../../features/dataHook/post/postMarkRemove";
import { postService } from "../../features/services/data.service";

export default function TableUsers() {
  const { column, isLoading: isColumnLoading } = useGetDataColumn(postService.getColumn());
  const { user, isLoading: isUserLoading } = useGetDataUsers(postService.getUser());
  const { attendance, isLoading: isAttendanceLoading } = useGetDataAttendance(
    user?.Items?.length > 0 ? user.Items.map((id) => id.Id) : null
  );
  const markAbsenceMutation = useMarkAbsence();
  const removeAbsenceMutation = useMarkRemove();

  const isLoading = isColumnLoading || isUserLoading || isAttendanceLoading;
  if (isLoading) {
    return <p>loading...</p>;
  }

  const handleAttendanceClick = (schoolboyId, columnId) => {
    const currentAttendance = attendance?.Items.find(
      (att) => att.SchoolboyId === schoolboyId && att.ColumnId === columnId
    );

    if (currentAttendance?.Title === "Н") {
      removeAbsenceMutation.mutate({ schoolboyId, columnId });
    } else {
      markAbsenceMutation.mutate({ schoolboyId, columnId });
    }
  };

  return (
    <main>
      <div className="table">
        <TableHeader />
        {user.Items.map((userItem, index) => (
          <Fragment key={userItem.Id}>
            <div className="table__cell">{index + 1}</div>
            <Link to={`/user/${userItem.Id}`}>
              <div className="table__cell">
                {userItem.FirstName && userItem.LastName
                  ? `${userItem.FirstName} ${userItem.LastName}`
                  : userItem.FirstName || userItem.LastName || userItem.SecondName}
              </div>
            </Link>

            {column.map((columnItem) => (
              <div
                className="table__cell"
                key={columnItem.Id}
                onClick={() => handleAttendanceClick(userItem.Id, columnItem.Id)}
              >
                {attendance?.Items.find(
                  (att) => att.SchoolboyId === userItem.Id && att.ColumnId === columnItem.Id
                )?.Title === "Н"
                  ? "Н"
                  : ""}
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </main>
  );
}
