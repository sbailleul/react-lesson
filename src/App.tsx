import "@/App.scss";
import { ColorPicker } from "@/ColorPicker";
import { EditableTodo } from "@/EditableTodo";
import { TodoList } from "@/TodoList";

export function App() {
  return (
    <div className="">
      <ColorPicker/>
      <TodoList
        todos={[
          {id: 'test',  description: "description", title: "title", status: true },
          {id: 'test2',  description: "description2", title: "title2", status: false },
        ]}
      />
    </div>
  );
}
