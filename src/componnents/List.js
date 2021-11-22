import React from "react";
const List = ({todos,setTodos})=>{
  console.log(todos)
  return(
    <div className="list">
      {
        todos.map((todo)=>(
          <li key={todo.id} >
            <input 
            type='text' 
            value={todo.title} 
            onChange={(e)=> e.preventDefault()}
           />
            <input 
            type='select' 
            value={todo.category} 
            onChange={(e)=> e.preventDefault()}
           />
           <input 
            type='date' 
            value={todo.duedate} 
            onChange={(e)=> e.preventDefault()}
           />
           <input type="checkbox"/>
          </li>
        ))}
    </div>
  )
}

export default List;