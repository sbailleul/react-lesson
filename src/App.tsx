import "@/App.scss";
import { Todo } from "@/Todo";

export function App() {
  return <div className="">
    <Todo title="MaTodo" description="Test" status={true} ></Todo>
  </div>;
}
