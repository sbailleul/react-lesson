import type { Student } from "@/features/students-managment/shared/types";
import { useState } from "react";
type Props = { onStudentCreated: (student: Omit<Student, "id">) => void };
export function StudentForm({ onStudentCreated }: Props) {
  const [firstname, setFirstname] = useState<string>();
  const [lastname, setLastname] = useState<string>();

  return (
    <div className="flex flex-column">
      <label htmlFor="firstname">Prénom</label>
      <input
        id="firstname"
        value={firstname}
        onChange={(e) => {
          setFirstname(e.target.value);
        }}
      />
      <label htmlFor="lastname">Nom</label>
      <input
        id="lastname"
        value={lastname}
        onChange={(e) => {
          setLastname(e.target.value);
        }}
      />
      <button
        type="button"
        disabled={!firstname || !lastname}
        onClick={() =>
          onStudentCreated({
            firstname: firstname as string,
            lastname: lastname as string,
          })
        }
      >
        Ajouter
      </button>
    </div>
  );
}
