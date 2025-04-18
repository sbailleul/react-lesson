import type { Student } from "@/features/students-managment/shared/types";

type Props = { students: Student[], onDelete: (id: string) => void };
export function StudentList({ students, onDelete }: Props) {
  return students.map((s) => (
    <div key={s.id} className="card flex ">
      <div>Prénom : {s.firstname}</div>
      <div>Nom : {s.lastname}</div>
      <button onClick={() => onDelete(s.id)}>Delete</button>
    </div>
  ));
}
