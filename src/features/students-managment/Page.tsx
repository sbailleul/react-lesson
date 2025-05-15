import type { Student } from "@/features/students-managment/shared/types";
import { StudentForm } from "@/features/students-managment/StudentForm";
import { StudentList } from "@/features/students-managment/StudentList";
import { ColorPicker } from "@/features/students-managment/ColorPicker";

import { useEffect, useState } from "react";
type Props = { flag: boolean };
export function Page({ flag }: Props) {
  const [students, setStudents] = useState<Student[]>([]);
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    setStatus("loading");

    fetch("http://fake-api/api/v1/students/")
      .then((res) =>
        res
          .json()
          .then((students) => {
            setStatus("success");
            setStudents([...students]);
          })
          .catch(() => {
            console.log("ERROR");
            setStatus("error");
          })
      )
      .catch(() => {
        setStatus("error");
      });
  }, []);

  return (
    <div className="flex flex-column">
        <ColorPicker />
      {status === "loading" && <span>Loading...</span>}
      {status === "error" && <span>Has error !</span>}
      <span>Flag {flag}</span>
      <StudentForm
        onStudentCreated={(s) => {
          fetch("http://fake-api/api/v1/students", {
            method: "POST",
            body: JSON.stringify(s),
            headers: { "Content-Type": "application/json" },
          }).then((res) => {
            res.json().then((students) => {
              setStudents([...students]);
            });
          });
        }}
      />
      <StudentList
        students={students}
        onDelete={(id) => {
          fetch(`http://fake-api/api/v1/students/${id}`, {
            method: "DELETE",
          }).then((res) => {
            res.json().then((students) => {
              setStudents([...students]);
            });
          });
        }}
      />
    </div>
  );
}
