import type { Student } from "@/features/students-managment/shared/types"; 
import { useState } from "react";

export type NewStudent = Omit<Student, "id">;

type Props = {
  onStudentReady: (student: NewStudent) => void;
};
export function StudentField({ onStudentReady }: Props) {
  const [student, setStudent] = useState<NewStudent>({
    firstname: "",
    lastname: "",
    studentClass: "",
  });
  return (
    <>
      <div>
        <label htmlFor="student-firstname">Firstname :</label>
        <input
          id="student-firstname"
          placeholder="Type firstname"
          onChange={(e) => {
            setStudent({ ...student, firstname: e.target.value });
          }}
          defaultValue={student.firstname}
        />
        <label htmlFor="student-lastname">Lastname :</label>
        <input
          id="student-lastname"
          placeholder="Type lastname"
          onChange={(e) => {
            setStudent({ ...student, lastname: e.target.value });
          }}
          defaultValue={student.lastname}
        />{" "}
        <label htmlFor="student-class">Class :</label>
        <input
          id="student-class"
          placeholder="Type class"
          onChange={(e) => {
            setStudent({ ...student, studentClass: e.target.value });
          }}
          defaultValue={student.studentClass}
        />
        <button
          type="button"
          onClick={() => {
            setStudent({ firstname: "", lastname: "", studentClass: "" });
            onStudentReady(student);
          }}
        >
          Add student
        </button>
      </div>
    </>
  );
}
