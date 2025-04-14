// import { setupMain } from "@testing-library/user-event/dist/cjs/setup/setup.js";
// import { ColProps } from "react-bootstrap";

// import { useEffect, useState } from "react";
// import { NavItem } from "react-bootstrap";
// import { v4 } from "uuid";
// const matrix: (boolean | undefined)[][] = [
//   [undefined, undefined, undefined],
//   [undefined, undefined, undefined],
//   [undefined, undefined, undefined],
// ];
// type Player = "player1" | "player2";
// export function TicTacToe() {
//   const [m, setM] = useState(matrix);
  
// //   const [user, setUser] = useState({firstname: ''})
// //   const [player, switchPlayer] = useState<Player>("player1");
//   return (
//     <table>
//       {m.map((row, i) => (
//         <tr>
//           {row.map((col, j) => (
//             <td
//               onClick={() => {
//                 // switchPlayer(player === "player1" ? "player2" : "player1");
//                 if (player === "player1") {
//                   m[i][j] = true;
//                 } else {
//                   m[i][j] = false;
//                 }
//                 setM(m);
//               }}
//             >
//               {col === undefined && "-"}
//               {col === true && "X"}
//               {col === false && "O"}
//             </td>
//           ))}
//         </tr>
//       ))}
//     </table>
//   );
// }
