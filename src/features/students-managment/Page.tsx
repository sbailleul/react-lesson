import type { Student } from "@/features/students-managment/shared/types";
import { StudentForm } from "@/features/students-managment/StudentForm";
import { StudentList } from "@/features/students-managment/StudentList";
import { useEffect, useState } from "react";

export function Page() {
  const [students, setStudents] = useState<Student[]>([]);
  useEffect(() => {
    fetch("http://fake-api/api/v1/students/").then((res) =>
      res.json().then((students) => {
        setStudents([...students]);
      })
    );
  }, []);
  return (
    <div className="flex flex-column">
      <StudentForm
        onStudentCreated={(s) => {
          setStudents([...students, s]);
        }}
      />
      <StudentList
        students={students}
        onDelete={(id) => {
          setStudents(students.filter((s) => s.id !== id));
        }}
      />
    </div>
  );
}
