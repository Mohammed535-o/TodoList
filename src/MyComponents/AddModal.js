import React from 'react'
import { useState } from 'react';

export default function AddModal({addTodo}) {
    let formStyle = {
        width: "50%",
    }
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description can't be empty");
        }
        addTodo(title, desc);
    }



  return (
    <>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Add Todo
          </button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Add Todo</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <form className='mx-auto' onSubmit={submit}>
                              <div className="mb-3">
                                  <label htmlFor="title" className="form-label">Enter Title</label>
                                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                              </div>
                              <div className="mb-3">
                                  <label for="desc" className="form-label">Enter description</label>
                                  <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                              </div>
                              <button type="submit" className="btn btn-outline-success" data-bs-dismiss="modal">Add</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    </>
  )
}
