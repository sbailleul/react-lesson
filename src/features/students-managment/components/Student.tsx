import { ThemeContext } from "@/features/students-managment/context/ThemeContext";
import type { Student as S } from "@/features/students-managment/shared/types";
import { useContext } from "react";
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
  const { exaColor } = useContext(ThemeContext);
  return (
    <div className="card" style={{ backgroundColor: exaColor }}>
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
