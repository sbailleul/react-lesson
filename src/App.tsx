import "@/App.scss";
import { TodoList } from "@/TodoList";

export function App() {
  return (
    <div className="">
      <TodoList
        todos={[
          { description: "test1", title: "test1description", status: false },
          { description: "test2", title: "test2description", status: true },
        ]}
      ></TodoList>
      {/* <Todo title="MaTodo" description="Test" status={true} ></Todo> */}
    </div>
  );
}
