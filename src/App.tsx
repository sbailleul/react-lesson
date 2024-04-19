import "@/App.scss";
import { EditableTodo } from "@/EditableTodo";
import { TodoList } from "@/TodoList";

export function App() {
  return (
    <div className="">
      <TodoList
        todos={[
          { description: "description", title: "title", status: true },
          { description: "description2", title: "title2", status: false },
        ]}
      />
      <EditableTodo />
    </div>
  );
}
