
import { StudentField, type NewStudent } from "@/features/students-managment/components/StudentField";

type Props = {
  title: string;
  fired: boolean;
  onStudentReady: (student: NewStudent) => void;
};

export function Form({ title, fired,onStudentReady }: Props) {
  if (fired) {
    return undefined;
  }
  return (
    <>
      <div className="flex flex-column">
        <h1>Title : {title} </h1>
        <StudentField
          onStudentReady={onStudentReady}
        />
      </div>
    </>
  );
}
