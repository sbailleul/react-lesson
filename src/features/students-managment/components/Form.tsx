import {
  Student,
  type StudentProps,
} from "@/features/students-managment/components/Student";
import { StudentField } from "@/features/students-managment/components/StudentField";
import { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  fired: boolean;
};
const initialStudents: Omit<StudentProps, "onDelete">[] = [
  { id: "a", firstname: "Ylan", lastname: "Tar", studentClass: "AL1" },
  { id: "b", firstname: "Mathias", lastname: "Tan", studentClass: "AL1" },
  { id: "c", firstname: "Nicolas", lastname: "Pion", studentClass: "AL1" },
  { id: "d", firstname: "Elias", lastname: "Jo", studentClass: "AL1" },
];
export function Form({ title, fired }: Props) {
  const [students, setStudents] = useState(initialStudents);
  if (fired) {
    return undefined;
  }
  return (
    <>
      <div className="flex flex-column">
        <h1>Title : {title} </h1>
        <StudentField
          onStudentReady={(student) => {
            setStudents([...students, { id: student.lastname, ...student }]);
          }}
        />

        {students.map((student) => {
          return (
            <Student
              onDelete={() => {
                setStudents(students.filter((s) => student.id !== s.id));
              }}
              {...student}
            />
          );
        })}
      </div>
    </>
  );
}
