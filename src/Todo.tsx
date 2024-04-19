export type TodoProps = {title: string, description: string, status: boolean}
export function Todo({title, description, status}: TodoProps){
    // let statusText: string | undefined;
    // if(status){
    //     statusText= "Done";
    // }else{
    //     statusText= "Todo"
    // }
    return (<div>
        <h1>{title}</h1>
        <p>{description}</p>
        {status ? <span>Done</span>  : <span>Todo</span>}
        {/* {status &&  <span>Done</span>  }
        {!status &&  <span>Todo</span>  } */}
    </div>)
}