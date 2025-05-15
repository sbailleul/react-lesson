import { createContext, useState, type ReactNode } from "react";

type Theme  = {
    exaColor: string;
    onColorChange: (newColor: string) => void;
}

export const defaultColor = "#F3F5F6";

export const ThemeContext = createContext<Theme>({
    exaColor: defaultColor,
    onColorChange: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [exaColor, setExaColor] = useState<string>(defaultColor);

    const onColorChange = (newColor: string) => {
        setExaColor(newColor);
    };

    return (
        <ThemeContext.Provider value={{ exaColor, onColorChange }}>
            {children}
        </ThemeContext.Provider>
    );
}
