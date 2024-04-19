export type TodoProps = {
  title: string;
  description: string;
  status: boolean;
};
export function Todo({ title, description, status }: TodoProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {status ? <span>Done</span> : <span>Todo</span>}
      <button
        className="btn btn-outline-info"
        onClick={() => {
          alert("Todo clicked");
        }}
      >
        Afficher alert
      </button>
      {/* {status &&  <span>Done</span>  }
        {!status &&  <span>Todo</span>  } */}
    </div>
  );
}
