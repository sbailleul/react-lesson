import "@/App.scss";
import { ColorPicker } from "@/ColorPicker";
import { TodoLists } from "@/TodoList";

export function App() {
  return (
    <div className="">
      <ColorPicker/>
      <TodoLists/>
      {/* <Todo title="MaTodo" description="Test" status={true} ></Todo> */}
    </div>
  );
}
