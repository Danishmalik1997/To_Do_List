import React, { useState } from 'react'
import './App.css'


function Heading() {
  const [task, addTask] = useState('')
  const [store, setStore] = useState([])

  function addValues() {
    setStore([...store, task])
    addTask('')
  }

  return (
    <div>
      <h1> To Do List </h1>
      <div className='container'>
        <label> Enter Task </label>
        <input value={task} type='text' onChange={(e) => addTask(e.target.value)}></input>
        <button onClick={addValues}>Add</button>
      </div>
      <ul>
        {store.map((value, index) => {
          return <li key={index}>
            {value}
            <input type="checkbox" />
            </li>
        })}
      </ul>
    </div>
  )
}

export { Heading }; 