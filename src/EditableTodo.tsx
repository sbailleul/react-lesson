import { useReducer, useState } from "react";

type Todo = { title: string; description: string; status: boolean };


function updateField<K extends keyof Todo>(fieldToUpdate: K, value: Todo[K]) {
  return { type: "UPDATE_FIELD" as const, fieldToUpdate, value };
}
type UpdateFieldAction = ReturnType<typeof updateField>;

type Action = UpdateFieldAction;

export function todoReducer(todo: Todo, action: Action): Todo {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {...todo, [action.fieldToUpdate]: action.value}
  }
  return todo;
}

export type EditableTodoProps = { onAdd: (todo: Todo) => void };
// export function EditableTodo({onAdd}: EditableTodoProps) {
//   const [todo, setTodo] = useState<Todo>({title: '', description: '' , status: false});
//   return (
//     <div className="card">
//       <input className="form-control" type="text" onChange={(e) => setTodo({...todo, title: e.target.value})}/>
//       <input className="form-control" type="text" onChange={(e) => setTodo({...todo, description: e.target.value})}/>
//       <input className="form- form-check-input" type="checkbox" onClick={() => setTodo({...todo, status: !todo.status})}/>
//       <button className=" btn btn-outline-success" onClick={() => onAdd(todo)}>Add Todo</button>
//     </div>
//   );
// }
export function EditableTodo({ onAdd }: EditableTodoProps) {
  const [todo, dispatch] = useReducer(todoReducer, {
    title: "",
    description: "",
    status: false,
  });
  return (
    <div className="card">
      <input
        className="form-control"
        type="text"
        onChange={(e) => dispatch(updateField("title", e.target.value))}
      />
      <input
        className="form-control"
        type="text"
        onChange={(e) => dispatch(updateField("description", e.target.value))}
      />
      <input
        className="form- form-check-input"
        type="checkbox"
        onClick={() => dispatch(updateField('status', !todo.status))}
      />
      <button className=" btn btn-outline-success" onClick={() => onAdd(todo)}>
        Add Todo
      </button>
    </div>
  );
}
