import { Card, CardBody, CardImg, CardTitle } from "react-bootstrap"

type EmployeeProps = {firstname: string, lastname: string, img: string}


export function Employee({firstname, lastname, img}:EmployeeProps){
    const fullname = `${firstname} ${lastname}`
    return <Card className="w-20">
        <CardImg  src={img}></CardImg>
        <CardBody>
            <CardTitle>{fullname}</CardTitle>
        </CardBody>
    </Card>
}

