import React from 'react'

export default function TodoItem({todo, onDelete, onSuccess}) {
  let Style = {
    backgroundColor : "black",
    color : "white"
  }
  return (
    <div style={Style} className='mt-2 mb-2 rounded-1 p-4'>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
      <div className='row justify-content-between'>
          <button className="btn btn-danger col-4 ms-2" onClick={()=>{onDelete(todo)}}>Delete</button>
          <button className='btn btn-success col-4 me-2' onClick={()=>{onSuccess(todo)}}>Done</button>
        </div>
    </div>
  )
}
