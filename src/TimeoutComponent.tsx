import { useEffect } from "react"

export function TimeoutComponent(){
    useEffect(() =>{
        const timeoutId = setTimeout(() => alert('Timeout'), 1000)
        return () => clearTimeout(timeoutId)
    } ,[])
    return <div>Timeout</div>
}