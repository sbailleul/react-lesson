import { useEffect, useState } from "react";

export type TodoProps = {
  title: string;
  description: string;
  status: boolean;
  onDelete: () => void;
};

export function Todo({ title, description, status, onDelete }: TodoProps) {
  const [text, setText] = useState<string>(title);
  const [counter, setCounter] = useState(0);
  const [pokemon, setPokemon] = useState<string>();
  const [pokemonStatus, setPokemonStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");


  return (
    <div className="card">
      <img data-testid="pokemon-img" src={pokemon}></img>
      <button
        onClick={() => {
          setPokemonStatus("loading");
          fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
            .then((res) => res.json())
            .then((res) => {
              setPokemon(res.sprites.back_default);
              setPokemonStatus("success");
            })
            .catch(() => setPokemonStatus("error"));
        }}
      >
        show pokemon
      </button>
      <h1>{text}</h1>
      <h2>Nb de click : {counter}</h2>
      <p>{description}</p>
      {status ? <span>Done</span> : <span>Todo</span>}
      <div className="d-flex">
        <button
          className="btn btn-outline-info"
          onClick={() => {
            // text = text.toUpperCase()
            setText(text.toUpperCase());
          }}
        >
          Majuscule
        </button>
        <button
          className="btn btn-outline-info"
          onClick={() => {
            setCounter((counter) => counter + 1);
          }}
        >
          Increment counter
        </button>
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
