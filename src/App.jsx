import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState('')

  const inputTask = useRef(null)

  const addTask = () => {
    setTodoList([...todoList, currentTask])
    inputTask.current.value = ''
  }

  const deleteTask = (taskToDelete) => {
    setTodoList(todoList.filter((item) => item !== taskToDelete))
  }
  
  return (
    <>
      <div className='App'>
        <h1>To Dos</h1>
        <div>
          <input 
            ref={inputTask}
            type='text' 
            placeholder='Task' 
            onChange={(event) => {setCurrentTask(event.target.value)}}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <hr />
         <ul>
          {todoList.map((task, index) => {
            return(
              <div id='task'>
                <li key={index}>{task}</li>
                <button onClick={()=>{deleteTask(task)}}>X</button>
              </div>
            )
          })}
         </ul>
      </div>
    </>
  )
}

export default App
