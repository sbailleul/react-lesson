import type { Student } from "@/features/students-managment/shared/types";
import {ThemeContext} from "@/features/students-managment/ThemeContext.tsx";
import {useContext} from "react";

type Props = { students: Student[], onDelete: (id: string) => void };
export function StudentList({ students, onDelete }: Props) {
    const { exaColor } = useContext(ThemeContext);
  return students.map((s) => (
  <div className="card" style={{ backgroundColor: exaColor }}>
    <div key={s.id} className="card flex ">
      <div>Prénom : {s.firstname}</div>
      <div>Nom : {s.lastname}</div>
      <button type="button" onClick={() => onDelete(s.id)}>Delete</button>
    </div>
  </div>
  ));
}
