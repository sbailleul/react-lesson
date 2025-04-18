import { Student as StudentComponent } from "@/features/students-managment/components/Student";
import type { Student } from "@/features/students-managment/shared/types";


type Props = { students: Student[], onDelete: (studentId: string ) => void };
export function Students({students,onDelete }: Props) {

  return students.map((student) => {
    return (
      <StudentComponent
        key={student.id}
        onDelete={onDelete}
        {...student}
      />
    );
  });
}
