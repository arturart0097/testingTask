import { memo } from "react";
import { postService } from "../../../shared/api/data.service";
import { useGetDataColumn } from "../../../shared/lib/hooks/getDataTable";

function TableHeader() {
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

export default memo(TableHeader);
