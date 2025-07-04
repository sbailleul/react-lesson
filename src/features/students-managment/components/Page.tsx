import { ColorPicker } from "@/features/students-managment/components/ColorPicker";
import { Form } from "@/features/students-managment/components/Form";
import type { NewStudent } from "@/features/students-managment/components/StudentField";
import { Students } from "@/features/students-managment/components/Students";
import type { Student } from "@/features/students-managment/shared/types";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary";
import { useCallback, useEffect, useMemo, useState } from "react";

type RequestStatus = "idle" | "loading" | "success" | "error";

export function Page() {
  const [students, setStudents] = useState<Student[]>([]);
  const [status, setStatus] = useState<RequestStatus>("idle");
  const [, setCreateStatus] = useState<RequestStatus>("idle");
  const [, setDeleteStatus] = useState<RequestStatus>("idle");
  const fetchStudents = useCallback(() => {
    setStatus("loading");
    fetch("api/v1/students")
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
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const uppercasedStudents = useMemo(
    () => students.map((s) => ({ ...s, firstname: s.firstname.toUpperCase() })),
    [students]
  );
  const addStudent = (student: NewStudent) => {
    setCreateStatus("loading");
    fetch("/api/v1/students", {
      method: "POST",
      body: JSON.stringify(student),
    })
      .then((response) => {
        setCreateStatus("success");
        response
          .json()
          .then((student) => {
            setStudents([...students, student]);
          })
          .catch(() => setCreateStatus("error"));
      })
      .catch(() => {
        setCreateStatus("error");
      });
  };
  const deleteStudent = (studentId: string) => {
    setDeleteStatus("loading");
    fetch(`/api/v1/students/${studentId}`, {
      method: "DELETE",
    })
      .then((response) => {
        setDeleteStatus("success");
        response
          .json()
          .then(() => {
            fetchStudents();
          })
          .catch(() => setDeleteStatus("error"));
      })
      .catch(() => {
        setDeleteStatus("error");
      });
  };
  return (
    <ErrorBoundary>
      <>
        <div className="flex flex-column">
          <h1>{students.length} étudiants</h1>
          {status === "loading" && <h2>Loading ...</h2>}
          {status === "error" && (
            <h2 className="alert alert-danger">Error !</h2>
          )}
          <Form
            title="Edition étudiants"
            fired={false}
            onStudentReady={addStudent}
          />
          <Students students={uppercasedStudents} onDelete={deleteStudent} />
          <ColorPicker />
        </div>
      </>
    </ErrorBoundary>
  );
}
