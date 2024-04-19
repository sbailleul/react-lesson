import { useState } from "react";

type Todo = {title: string, description: string, status: boolean;}

export type EditableTodoProps = {onAdd: (todo: Todo) => void}
export function EditableTodo({onAdd}: EditableTodoProps) {
  const [todo, setTodo] = useState<Todo>({title: '', description: '' , status: false});
  return (
    <div className="card">
      <input className="form-control" type="text" onChange={(e) => setTodo({...todo, title: e.target.value})}/>
      <input className="form-control" type="text" onChange={(e) => setTodo({...todo, description: e.target.value})}/>
      <input className="form- form-check-input" type="checkbox" onClick={() => setTodo({...todo, status: !todo.status})}/>
      <button className=" btn btn-outline-success" onClick={() => onAdd(todo)}>Add Todo</button>
    </div>
  );
}
