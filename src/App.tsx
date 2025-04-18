import "@/App.scss";
import { Page } from "@/features/students-managment/components/Page";
import { useState } from "react";
type Test = {
  age: number;
  firstname: string;
};

export function App() {
  return (
    <div className="d-flex">
      <Page />
      {/* <Form title="AL1" fired={false}  /> */}
      {/* <TicTacToe/> */}
    </div>
  );
}
