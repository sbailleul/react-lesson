import { useParams } from "react-router-dom";

export function StudentDetailPage () {
  const { studentId } = useParams();
  return <>MON ETUDIANT {studentId}</>;
}
