import type { Student as S } from "@/features/students-managment/shared/types";
export type StudentProps = S & {
  onDelete: (studentId: string) => void;
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
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
