import { Form } from "@/features/students-managment/components/Form";
import { Students } from "@/features/students-managment/components/Students";
import type { Student } from "@/features/students-managment/shared/types";
import { useEffect, useState } from "react";

export function Page() {
  const [students, setStudents] = useState<Student[]>([]);
  useEffect(() => {
    fetch("http://fake-api/api/v1/students").then((response) => {
      response.json().then((s) => setStudents(s));
    });
  }, []);
  return (
    <>
      <Form
        title="Edition étudiants"
        fired={false}
        onStudentReady={() => undefined}
      />
      <Students students={students} onDelete={() => {}} />
    </>
  );
}
