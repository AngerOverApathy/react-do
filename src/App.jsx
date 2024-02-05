import { useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState('')

  const addTask = () => {
    setTodoList([...todoList, currentTask])
  }
  
  return (
    <>
      <div className='App'>
        <h1>To Dos</h1>
        <div>
          <input type='text' placeholder='Task' onChange={(event) => {setCurrentTask(event.target.value)}}/>
          <button onClick={addTask}>Add Task</button>
        </div>
        <hr />
         <ul>
          {todoList.map((task, index) => {
            return <li key={index}>{task}</li>
          })}
         </ul>
      </div>
    </>
  )
}

export default App
