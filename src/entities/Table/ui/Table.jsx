import { postService } from "../../../shared/api/data.service";
import {
  useGetDataAttendance,
  useGetDataColumn,
  useGetDataUsers,
} from "../../../shared/lib/hooks/getDataTable";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import { Loader } from "../../../widgets/Loader";

export const Table = () => {
  const { isLoading: isColumnLoading } = useGetDataColumn(
    postService.getColumn()
  );
  const { user, isLoading: isUserLoading } = useGetDataUsers(
    postService.getUser()
  );
  const { isLoading: isAttendanceLoading } = useGetDataAttendance(
    user?.Items?.length > 0 ? user.Items.map((id) => id.Id) : null
  );

  if (isColumnLoading || isUserLoading || isAttendanceLoading) {
    return <Loader />;
  }


  return (
    <main>
      <div className="table">
        <TableHeader />
        <TableRow />
      </div>
    </main>
  );
};
