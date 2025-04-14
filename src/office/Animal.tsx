const animalName = "Baptiste la Mouette";

type Props = { name: string; pseudo?: string; onBark: () => void };
export function Animal({ name, onBark, ...props }: Props) {
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={onBark}>Bark</button>
      <p>Pas de pseudo</p>
    </div>
  );
}
type FormProps = { login: string; onLoginChanged: (login: string) => void };
export function Form({ login, onLoginChanged }: FormProps) {
  return (
    <>
      <label>Login : {login}</label>
      <input onChange={(e) => onLoginChanged(e.target.value)} />
    </>
  );
}
