import { Form } from "@/features/students-managment/components/Form";
import { Students } from "@/features/students-managment/components/Students";
import type { Student } from "@/features/students-managment/shared/types";
import { useEffect, useMemo, useState } from "react";

type RequestStatus = "idle" | "loading" | "success" | "error";
type Props = { studentId?: string };

export function Page() {
  const [students, setStudents] = useState<Student[]>([]);
  const [status, setStatus] = useState<RequestStatus>("idle");
  useEffect(() => {
    setStatus("loading");
    fetch("http://fake-api/api/v1/students")
      .then((response) => {
        response
          .json()
          .then((s) => {
            setStudents(s);
            setStatus("success");
          })
          .catch(() => {
            setStatus("error");
          });
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  const uppercasedStudents = useMemo(
    () => students.map((s) => ({ ...s, firstname: s.firstname.toUpperCase() })),
    [students]
  );

  return (
    <div className="flex flex-column">
      <h1>{students.length} étudiants</h1>
      {status === "loading" && <h2>Loading ...</h2>}
      {status === "error" && <h2 className="alert alert-danger">Error !</h2>}
      <Form
        title="Edition étudiants"
        fired={false}
        onStudentReady={() => undefined}
      />
      <Students students={uppercasedStudents} onDelete={() => {}} />
    </div>
  );
}
