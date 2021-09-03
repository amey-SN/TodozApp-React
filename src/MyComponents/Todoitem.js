import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    
    return (
        <>
        
            <div 
            className={`col-lg-3 col-sm-6 card m-3 ${todo.lvl===3?"bg-highlight":"bg-light"}`}>
           
                <div className="card-body">
                    <h4 className="card-title">{todo.title}</h4>
                    <h6 className="card-text">{todo.desc}</h6>
                    <h6 className="card-text">Priority:{todo.lvl}</h6>
                    <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
                 </div>
            </div>
           
     
        </>
    )
}