import { useParams } from "react-router-dom";

export function Article(){
    const {id} = useParams()
    return <h1>Article id : {id}</h1>
}