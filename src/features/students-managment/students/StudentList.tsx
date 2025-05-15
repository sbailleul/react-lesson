import type { Student } from "@/features/students-managment/shared/types";
import { ThemeContext } from "@/shared/theme/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

type Props = { students: Student[]; onDelete: (id: string) => void };
export function StudentList({ students, onDelete }: Props) {
  const { exaColor } = useContext(ThemeContext);
  return students.map((s) => (
    <div className="card" key={s.id} style={{ backgroundColor: exaColor }}>
      <div key={s.id} className="card flex ">
        <div>Prénom : {s.firstname}</div>
        <div>Nom : {s.lastname}</div>
        <Link to={`/students/${s.id}`}>DETAIL</Link>
        <button type="button" onClick={() => onDelete(s.id)}>
          Delete
        </button>
      </div>
    </div>
  ));
}
