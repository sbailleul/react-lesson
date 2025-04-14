import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  fired: boolean;
};
const initialStudents = [
  { id: "a", name: "Ylan" },
  { id: "b", name: "Mathias" },
  { id: "c", name: "Nicolas" },
  { id: "d", name: "Elias" },
];
type Pokemon = { name: string };
export function Form({ title, fired }: Props) {
  const [students, setStudents] = useState(initialStudents);
  const [newStudentName, setNewStudentName] = useState("François");
  if (fired) {
    return undefined;
  }
  return (
    <>
      <div className="flex flex-column">
        <h1>Title : {title} </h1>
        <div>
          <input
            id="student-name"
            placeholder="Type your new student name"
            onChange={(e) => {
              setNewStudentName(e.target.value);
            }}
            defaultValue={newStudentName}
          />
          <button
            onClick={() => {
              setNewStudentName("");
              setStudents([{id: newStudentName, name: newStudentName}, ...students]);
            }}
          >
            Add student
          </button>
        </div>

        {students.map((student) => {
          return (
            <div key={student.id} className="d-flex w-full">
              {student.name}
            </div>
          );
        })}
      </div>
    </>
  );
}
