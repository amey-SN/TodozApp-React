import React from 'react'
import {TodoItem} from "./Todoitem";

export const Content = (props) => {
    let myStyle = {
        minHeight: "77vh",
    }

    // to sort the todo according to priority level
    let sortedList = props.todos.sort(function(a, b){
        return b.lvl - a.lvl;
    });
    return (
        <>
        <div className="col-lg-9 my-3" style={myStyle}>
            <div className="container-fluid">
                <h3 className="text-center text-light bg-dark p-3">Todos List </h3>
                <div className="row justify-content-center">
                    {sortedList.length===0? "No Todos to display":  
                sortedList.map((todo)=>{
                    console.log(todo.sno);
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                        )
                    })
                } 
                
                </div>
            </div>
        </div>
        </>
    )
}