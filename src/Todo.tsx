import { useState } from "react";

export type TodoProps = {
  title: string;
  description: string;
  status: boolean;
  onDelete: () => void;
};
export function Todo({ title, description, status, onDelete }: TodoProps) {
// let text =title;
  const [text, setText] = useState<string>(title);
  return (
    <div>
      <h1>{text}</h1>
      <p>{description}</p>
      {status ? <span>Done</span> : <span>Todo</span>}
      <button
        onClick={() => {
            // text = text.toUpperCase()
          setText(text.toUpperCase());
        }}
      >
        Majuscule
      </button>
      <div onClick={() => alert("div clicked")}>
        <button
          className="btn btn-danger"
          onClick={() => {
            onDelete();
          }}
        >
          Supprimer
        </button>
      </div>

      {/* {status &&  <span>Done</span>  }
        {!status &&  <span>Todo</span>  } */}
    </div>
  );
}
