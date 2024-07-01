import { useLoaderData } from "react-router-dom"
import { User } from "./api"

export function Account(){
    const user: User = useLoaderData() as User;
    return <h1>ACCOUNT {user.firsname}</h1>
}