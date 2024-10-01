export default function TableHeader({ column }) {
  return (
    <>
      <div className="table__header">#</div>
      <div className="table__header">Name</div>
      {column.map((col) => (
        <div className="table__header" key={col.Id}>
          {col.Title}
        </div>
      ))}
    </>
  );
}
