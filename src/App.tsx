import "@/App.scss";
import { ColorPicker } from "@/ColorPicker";
import { ThemeProvider } from "@/ThemeProvider";
import { TodoLists } from "@/TodoList";

export function App() {
  return (
    <div className="">
      <ThemeProvider>
        <ColorPicker borderColor={"black"}></ColorPicker>
        <TodoLists />
        {/* <Todo title="MaTodo" description="Test" status={true} ></Todo> */}
      </ThemeProvider>
    </div>
  );
}
