import { Link } from "react-router-dom";
import {
  useMarkRate,
  useUnMarkRate,
} from "../../../shared/lib/hooks/postDataTable";

export default function TableRow({ users, index, column, attendance }) {
  const { mutate: markMutate } = useMarkRate();
  const { mutate: unMarkMutate } = useUnMarkRate();

  const handleAttendanceClick = (studentId, columnId, isAbsent) => {
    if (isAbsent) {
      unMarkMutate({ SchoolboyId: studentId, ColumnId: columnId });
    } else {
      markMutate({ SchoolboyId: studentId, ColumnId: columnId, Title: "H" });
    }
  };

  const name = [users.FirstName, users.LastName, users.SecondName]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <div className="table__cell">{index + 1}</div>
      <div className="table__cell">
        <Link to={`/info/${users.Id}`}>{name}</Link>
      </div>
      {column?.map((col) => {
        const isAbsent = attendance?.some(
          (a) => a.SchoolboyId === users.Id && a.ColumnId === col.Id
        );
        return (
          <div
            className="table__cell table__cell-hover"
            key={col.Id}
            onClick={() => handleAttendanceClick(users.Id, col.Id, isAbsent)}
          >
            {isAbsent ? "H" : ""}
          </div>
        );
      })}
    </>
  );
}
