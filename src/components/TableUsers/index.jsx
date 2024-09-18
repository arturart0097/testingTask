import { Fragment } from "react";
import { Link } from "react-router-dom";
import { postService } from "../../features/services/data.service";
import useGetDataColumn from "../../features/dataHook/get/getColumn";
import useGetDataUsers from "../../features/dataHook/get/getData";
import useGetDataAttendance from "../../features/dataHook/get/getAttendance";
import "./style.css";
import TableHeader from "./TableHeader";

export default function TableUsers() {
  const { column, isLoading: isColumnLoading } = useGetDataColumn(
    postService.getColumn()
  );
  const { user, isLoading: isUserLoading } = useGetDataUsers(
    postService.getUser()
  );
  const {
    attendance,
    isLoading: isAttendanceLoading,
    refetch,
  } = useGetDataAttendance(
    user && user.Items && user.Items.length > 0
      ? user.Items.map((id) => id.Id)
      : null
  );

  const isLoading = isColumnLoading || isUserLoading || isAttendanceLoading;
  if (isLoading) {
    return <p>loading...</p>;
  }

  const handleMarkAbsence = async (schoolboyId, columnId) => {
    try {
      await postService.markAbsence(schoolboyId, columnId);
      alert("Absence marked successfully!");
      refetch();
    } catch (error) {
      console.error("Error marking absence:", error);
      alert("Failed to mark absence.");
    }
  };

  const handleRemoveAbsence = async (schoolboyId, columnId) => {
    try {
      await postService.removeAbsence(schoolboyId, columnId);
      alert("Absence removed successfully!");
      refetch();
    } catch (error) {
      console.error("Error removing absence:", error);
      alert("Failed to remove absence.");
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
                  : userItem.FirstName ||
                    userItem.LastName ||
                    userItem.SecondName}
              </div>
            </Link>

            {column.Items.map((columnItem) => (
              <div
                className="table__cell"
                key={columnItem.Id}
                onClick={() => {
                  const currentAttendance = attendance?.Items.find(
                    (att) =>
                      att.SchoolboyId === userItem.Id &&
                      att.ColumnId === columnItem.Id
                  );

                  if (currentAttendance?.Title === "Н") {
                    handleRemoveAbsence(userItem.Id, columnItem.Id);
                  } else {
                    handleMarkAbsence(userItem.Id, columnItem.Id);
                  }
                }}
              >
                {attendance?.Items.find(
                  (att) =>
                    att.SchoolboyId === userItem.Id &&
                    att.ColumnId === columnItem.Id
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
