import "@/App.scss";
import { Theme } from "@/Theme";
import { TodoLists } from "@/TodoList";

export function App() {
  return (
    <div className="">
      <Theme/>
      <TodoLists/>
      {/* <Todo title="MaTodo" description="Test" status={true} ></Todo> */}
    </div>
  );
}
