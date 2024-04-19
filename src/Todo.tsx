type TodoProps = {title: string, description: string, status: boolean}
export function Todo({title, description, status}: TodoProps){
    let statusText = "";
    if(status){
        statusText = "Done"
    }else{
        statusText = "To do"
    }

    return (<div>
        <h1>{title}</h1>
        <p>{description}</p>
        <span>
            {statusText}
            {/* {status && <span>Done</span>} */}
            {/* {!status && <span>To do</span>} */}
        </span>
    </div>)
}