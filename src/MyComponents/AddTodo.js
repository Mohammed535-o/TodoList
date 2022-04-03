import React from 'react'
import { useState } from 'react';
export default function AddTodo({addTodo}) {
  let formStyle = {
      width : "50%",
  }
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e)=>{
      e.preventDefault();
      if(!title || !desc){
          alert("Title or Description can't be empty");
      }
      addTodo(title,desc);
  }
  
  return (
    <>
          <form style={formStyle} className='mx-auto mt-5' onSubmit={submit}>
              <div className="mb-3">
                  <label htmlFor="title" className="form-label">Enter Title</label>
                  <input type="text" value={title}  onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"/>
              </div>
              <div className="mb-3">
                  <label for="desc" className="form-label">Enter description</label>
                  <input type="text" value={desc}  onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
              </div>
              <button type="submit" className="btn btn-outline-success">Add Todo</button>
          </form>
    </>
  )
}
