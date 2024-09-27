import { Fragment, useMemo, useState, useEffect } from "react";
import { postService } from "../../../shared/api/data.service";
import {
  useGetDataAttendance,
  useGetDataColumn,
  useGetDataUsers,
} from "../../../shared/lib/hooks/getDataTable";
import { Link } from "react-router-dom";
import {
  useMarkAbsence,
  useMarkRemove,
} from "../../../shared/lib/hooks/postDataTable";
import Modal from "../../../widgets/Modal/ui/Modal";

export default function TableRow() {
  const { column } = useGetDataColumn(
    useMemo(() => postService.getColumn(), [])
  );
  const { user } = useGetDataUsers(useMemo(() => postService.getUser(), []));

  const schoolboyIds = useMemo(
    () => user?.Items?.map((userItem) => userItem.Id) ?? [],
    [user]
  );
  const { attendance } = useGetDataAttendance(schoolboyIds);

  const { mutation: markAbsenceMutation, error: markAbsenceError } =
    useMarkAbsence();
  const { mutation: removeAbsenceMutation, error: removeAbsenceError } =
    useMarkRemove();

  const [show, setShow] = useState(false);

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

  useEffect(() => {
    if (markAbsenceError || removeAbsenceError) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }
  }, [markAbsenceError, removeAbsenceError]);

  return (
    <>
      {show && (
        <Modal
          title="Відбулася непередбачена помилка!"
          onClose={() => setShow(false)}
        />
      )}

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

          {column.map((columnItem) => (
            <div
              className="table__cell"
              key={columnItem.Id}
              onClick={() => handleAttendanceClick(userItem.Id, columnItem.Id)}
              style={{ cursor: "pointer" }}
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
    </>
  );
}
