import { Todo } from "@/Todo";

type Todo = { title: string; description: string; status: boolean };
export type TodoListProps = { todos: Todo[] };
export function TodoList({ todos }: TodoListProps) {
  return <div>
    {todos.map(todo => {
        return <Todo title={todo.title} description={todo.description} status={todo.status}/>
    })}
  </div>;
}
