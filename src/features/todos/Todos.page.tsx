import { TodoList } from "@/features/todos/TodoList";

export function Todos() {
  return (
    <TodoList
      todos={[
        {
          id: "test",
          description: "description",
          title: "title",
          status: true,
        },
        {
          id: "test2",
          description: "description2",
          title: "title2",
          status: false,
        },
      ]}
    />
  );
}
