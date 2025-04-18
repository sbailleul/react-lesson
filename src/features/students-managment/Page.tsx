import type { Student } from "@/features/students-managment/shared/types";
import { StudentForm } from "@/features/students-managment/StudentForm";
import { StudentList } from "@/features/students-managment/StudentList";
import { useEffect, useState } from "react";
import { isElement } from "react-dom/test-utils";
type Props = { flag: boolean };
export function Page({ flag }: Props) {
  const [students, setStudents] = useState<Student[]>([]);
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    setStatus('loading');

    fetch("http://fake-api/api/v1/students/")
      .then((res) =>
        res
          .json()
          .then((students) => {
            setStatus('success');
            setStudents([...students]);
          })
          .catch(() => {
            console.log("ERROR");
            setStatus('error');
          })
      )
      .catch(() => {
        setStatus('error');
      });
  }, []);
  return (
    <div className="flex flex-column">
      {status === 'loading' && <span>Loading...</span>}
      {status === 'error' && <span>Has error !</span>}
      <span>Flag {flag}</span>
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
