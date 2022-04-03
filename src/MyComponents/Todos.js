import React from 'react'
import  TodoItem  from '../MyComponents/TodoItem'
export const Todos = (props) => {
  let Style = {
     width : "75%",
  }
  return (
    <div className="container mx-auto" style={Style}>
        <h3 className='text-center mb-3 mt-3'>Todos List</h3>
        {props.todos.length===0?"No Todos to display" : 
        props.todos.map((todo)=>{
          
          return(
            <>
           <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} onSuccess={props.onSuccess}/>
            </>
          )
        })}
        
        
    </div>
  )
}
