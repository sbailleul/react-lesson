import { CSSProperties } from "react";

export type Color = { r: number; g: number; b: number };

export function mapColorToStyleBackground({r,g,b}: Color): CSSProperties{
    return {backgroundColor: `rgb(${r} ${g} ${b})`}
}