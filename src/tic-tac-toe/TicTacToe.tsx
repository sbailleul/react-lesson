import { useMemo, useState } from "react";

type User = "X" | "O";
export function TicTacToe() {
  const [matrix, setMatrix] = useState<(undefined | User)[][]>([
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
  ]);
  const [user, setUser] = useState<User>("X");

  const winner = useMemo(() => {
    if (matrix[1][0] == matrix[1][1] && matrix[1][1] == matrix[1][2]) {
      return matrix[1][0];
    }
  }, [matrix]);
  return (
    <>
      {winner && <h1>Well done : {winner}</h1>}
      <table>
        {matrix.map((row, i) => {
          const r = row.map((cell, j) => {
            return (
              <td
                onClick={() => {
                  if (cell) {
                    return;
                  }
                  matrix[i][j] = user;
                  setUser(user === "X" ? "O" : "X");
                  setMatrix([...matrix]);
                }}
              >
                {cell ?? "-"}
              </td>
            );
          });
          return <tr>{r}</tr>;
        })}
      </table>
    </>
  );
}
