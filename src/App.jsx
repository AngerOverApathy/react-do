import { useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState('')

  const addTask = () => {
    if (currentTask !== '') {
      setTodoList([...todoList, currentTask])
      setCurrentTask('')
    }
  }
  
  return (
    <>
      <div className='App'>
        <h1>To Dos</h1>
        <div>
          <input type='text' placeholder='Task' onChange={(event) => {setCurrentTask(event.target.value)}}/>
          <button onClick={}>Add Task</button>
        </div>
        <hr />
      </div>
    </>
  )
}

export default App
