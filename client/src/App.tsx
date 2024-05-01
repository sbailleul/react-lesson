import "@/App.scss";
import { Navbar } from "@/core/nav/Navbar";
import { ColorPickerWrapper } from "@/core/theme/ColorPickerWrapper";
import { ThemeProvider } from "@/core/theme/ThemeContext";
import { Employees } from "@/features/office/Employees";


export function App() {
  return (
    <>
      <Navbar />
      <ThemeProvider>
        <ColorPickerWrapper />
        <div className="d-flex flex-wrap">
          <Employees />
        </div>
      </ThemeProvider>
    </>
  );
}
