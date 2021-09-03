import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [lvl, setLvl] = useState("");

  
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc || !lvl) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc ,lvl);
            setTitle("");
            setDesc("");
            setLvl("");
        }
    }
    return (
        <div className="col-lg-3 my-3">
            <div className="container-fluid">

                <h3 className="text-center text-light bg-dark p-3">Add a Todo </h3>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description</label>
                        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                    </div>
                    <div className="mb-3">
                        <label id="rangeText"  className="form-label">Todo Priority Level</label>
                        <div className="container-fluid px-0">
                            <div className="row d-flex justify-content-between">
                                <div className="col-2 badge text-center bg-success fw-bold">Low</div>
                                <div className="col-2 badge text-center bg-primary fw-bold">Mid</div>
                                <div className="col-2 badge text-center bg-danger fw-bold">High</div>
                            </div>
                        </div>
                        <input 
                        id="rangeInput" name="rangeInput"
                        onChange="setlabel()"
                        type="range"
                        min="1"
                        max="3"
                        step="1"
                        value={lvl} 
                        onChange={(e) => setLvl(e.target.value)} 
                        className="form-range" 
                        id="lvl" />
                    </div>
                    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                </form>
            </div>
        </div>
    )
}
