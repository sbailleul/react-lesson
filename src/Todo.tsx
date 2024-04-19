export type TodoProps = {
  title: string;
  description: string;
  status: boolean;
  onDelete: () => void
};
export function Todo({ title, description, status, onDelete }: TodoProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {status ? <span>Done</span> : <span>Todo</span>}
      <button
        className="btn btn-danger"
        onClick={onDelete}
      >
        Supprimer
      </button>
      {/* {status &&  <span>Done</span>  }
        {!status &&  <span>Todo</span>  } */}
    </div>
  );
}
