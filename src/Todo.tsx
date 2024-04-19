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
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>{text}</h1>
      <h2>Nb de click : {counter}</h2>
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
      <button
        onClick={() => {
         setCounter((counter) =>  counter +  1 )
         
        }}
      >Increment counter</button>
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
