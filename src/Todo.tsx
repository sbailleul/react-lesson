import { ThemeContext } from "@/ThemeContext";
import { useContext, useEffect, useState } from "react";

type TodoProps = {
  title: string;
  description: string;
  status: boolean;
  onDelete: () => void;
};
type Todo = { title: string; description: string; status: boolean };

export function Todo({ title, description, status, onDelete }: TodoProps) {
  const [todo, setTodo] = useState({ title, description, status });
  const [pokemon, setPokemon] = useState<string>();
  const [pokeStatus, setPokeStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  // const searchParams = new URLSearchParams();
  // searchParams.append("name", "toto");
  // const headers = new Headers();
  // headers.append(
  //   "Authorization",
  //   "Bearer avzgzaerglazeikghalzkegjhzaoeedgfjhazeogjhuhuazejtfhtgf"
  // );
  // fetch(`http://localhost/basket?${searchParams.toString()}`, {
  //   method: "POST",
  //   headers,
  //   body: JSON.stringify({ articleId: 123 }),
  // });
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setPokeStatus("loading");
        const result = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        const pokeJson = await result.json();
        setPokemon(pokeJson.sprites.front_default);
        setPokeStatus("success");
      } catch (e) {
        setPokeStatus("error");
      }
    };
    fetchPokemon();
  }, []);
  return (
    <div>
      {pokeStatus === "success" && (
        <div className="alert alert-success">Pika is back</div>
      )}
      {pokeStatus === "error" && (
        <div className="alert alert-success">Pika is gone</div>
      )}
      {pokeStatus === "loading" && (
        <div className="alert alert-info">Pika is running</div>
      )}
      <img data-testid="poke-img" src={pokemon} />
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <span>
        <span>{todo.status ? "Done" : "Todo"}</span>
      </span>

      <input
        type="text"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <input
        type="text"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <input
        type="checkbox"
        checked={todo.status}
        onChange={() => setTodo({ ...todo, status: !todo.status })}
      />
      <button onClick={onDelete} />
    </div>
  );
}
