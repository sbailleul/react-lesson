type TodoProps = {
  title: string;
  description: string;
  status: boolean;
  onDelete: () => void;
};
export function Todo({ title, description, status, onDelete }: TodoProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <span>
        <span>{status ? "Done" : "Todo"}</span>
      </span>
      <button onClick={onDelete} />
    </div>
  );
}
