import "@/App.scss";
import { ColorPicker } from "@/ColorPicker";
import { ThemeContextProvider } from "@/ThemeContext";
import { TimeoutComponent } from "@/TimeoutComponent";
import { TodoList } from "@/TodoList";
import { useState } from "react";

export function App() {
  const [showTimeout, setShowTimeout] = useState(true);
  return (
    <ThemeContextProvider>
      <div className="">
        <button
          className="btn"
          onClick={() => {
            setShowTimeout(!showTimeout);
          }}
        >
          Show timeout
        </button>
        {/* {showTimeout && <TimeoutComponent></TimeoutComponent>} */}
        <ColorPicker />
        <TodoList
          todos={[
            {
              id: "test",
              description: "description",
              title: "title",
              status: true,
            },
            {
              id: "test2",
              description: "description2",
              title: "title2",
              status: false,
            },
          ]}
        />
      </div>
    </ThemeContextProvider>
  );
}
