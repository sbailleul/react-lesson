import '@/App.scss'
import { Todo } from '@/Todo'



export function App() {

  return (
    <div className='' >
      <Todo title="title" description="description" status={true}/>
    </div>
  )
}

