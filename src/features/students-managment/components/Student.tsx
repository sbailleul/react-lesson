export type StudentProps = {
  id: string;
  firstname: string;
  lastname: string;
  studentClass: string;
  onDelete: () => void;
};
export function Student({
  id,
  firstname,
  lastname,
  studentClass,
  onDelete,
}: StudentProps) {
  return (
    <div className="card">
      <div className="flex card-header justify-content-between">
        <span>
          {firstname} - {lastname} / {studentClass}
        </span>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
