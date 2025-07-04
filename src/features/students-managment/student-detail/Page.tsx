import type { StudentDetail } from "@/features/students-managment/shared/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Page() {
  const [student, setStudent] = useState<StudentDetail>();
  const [, setStatus] = useState("idle");
  const { studentId } = useParams();
  useEffect(() => {
    setStatus("loading");
    fetch(`http://fake-api/api/v1/students/${studentId}`)
      .then((res) =>
        res
          .json()
          .then((student) => {
            setStatus("success");
            setStudent(student);
          })
          .catch(() => {
            console.log("ERROR");
            setStatus("error");
          })
      )
      .catch(() => {
        setStatus("error");
      });
  }, [studentId]);
  if (student === undefined) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <span>Prénom : {student.firstname}</span>
      <span>Nom : {student.lastname}</span>
      <span>Age : {student.age}</span>
      <span>Class : {student.class}</span>
      <span>Email : {student.email}</span>
    </>
  );
}
