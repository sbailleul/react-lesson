import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalTitle } from "react-bootstrap";

type Pokemon = {
  id: number;
  name: string;
  sprite: string;
};
type PokemonProps = { name: string; show: boolean; onHide: () => void };
export function Pokemon({ name, show, onHide }: PokemonProps) {
  const [pokemon, setPokemon] = useState<Pokemon>();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((json) =>
        setPokemon({
          id: json.id,
          name: json.name,
          sprite: json.sprites.back_default,
        })
      );
  }, [name, setPokemon]);
  return (
    <Modal show={show} onHide={onHide}>
      <ModalTitle>{pokemon?.name}</ModalTitle>
      <ModalBody>
        <img src={pokemon?.sprite}/>
      </ModalBody>
    </Modal>
  );
}
