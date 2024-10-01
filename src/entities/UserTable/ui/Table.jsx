import {
  useGetAttendance,
  useGetColumns,
  useGetStudents,
} from "../../../shared/lib/hooks/getDataTable";
import Loader from "../../../widgets/Loader/ui/Loader";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

export const Table = () => {
  const { data: students, isLoading: isLoadingStudents } = useGetStudents();
  const { data: columns, isLoading: isLoadingColumns } = useGetColumns();
  const { data: attendance, isLoading: isLoadingAttendance } =
    useGetAttendance();

  const loading = isLoadingAttendance || isLoadingColumns || isLoadingStudents;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <div className="table">
            <TableHeader column={columns} />
            {students.map((student, i) => (
              <TableRow
                index={i}
                users={student}
                key={student.Id}
                column={columns}
                attendance={attendance}
              />
            ))}
          </div>
        </main>
      )}
    </>
  );
};
