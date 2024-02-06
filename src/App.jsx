import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState('')

  const inputTask = useRef(null)

  const addTask = () => {
    setTodoList([...todoList, { task: currentTask, completed: false }])
    inputTask.current.value = ''
  }

  const completeTask = (taskToComplete) => {
    setTodoList(
      todoList.map((item) => {
        return item.task === taskToComplete 
        ? { task: taskToComplete, completed: true } 
        : { task: item.task, completed: item.completed ? true : false }
      })
    )
  }

  const deleteTask = (taskToDelete) => {
    setTodoList(todoList.filter((item) => item.task !== taskToDelete))
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
          {todoList.map((val, index) => {
            return(
              <div id='task'>
                <li key={index}>{val.task}</li>
                <button 
                  class='completed-btn'
                  onClick={()=>{completeTask(val.task)}}
                >Completed</button>
                <button 
                  class='delete-button'
                  onClick={()=>{deleteTask(val.task)}}
                >X</button>
                {val.completed ? <h1>Completed</h1> : <h1>Task Not Completed</h1>}
              </div>
            )
          })}
         </ul>
      </div>
    </>
  )
}

export default App
