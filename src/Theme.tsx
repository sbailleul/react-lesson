import { ColorPicker } from "@/ColorPicker"
import  type {Color} from '@/ColorPicker'
import { useState } from "react"
export function Theme(){
    const [color, setColor] = useState<Color>({r: 0, g:0, b:0})
    return (<ColorPicker color={color} onColorChanged={setColor}/>)
}