import useGetDataColumn from "../../../features/dataHook/get/getColumn";
import { postService } from "../../../features/services/data.service";

export default function TableHeader() {
  const { column } = useGetDataColumn(postService.getColumn());

  return (
    <>
      <div className="table__header">#</div>
      <div className="table__header">Name</div>
      {column.map((columnItem) => (
        <div className="table__header" key={columnItem.Id}>
          {columnItem.Title}
        </div>
      ))}
    </>
  );
}
