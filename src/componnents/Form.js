import React from "react";
import {v4 as uuidv4} from 'uuid';

const Form = ({task ,setTask ,category ,setCategory ,date ,setDate ,todos ,setTodos})=>{

  const onTaskChange= (event) =>{
    setTask(event.target.value);
  };

  const onCategoryChange= (event) =>{
    setCategory(event.target.value);
  };

  const onDateChange= (event) =>{
    setDate(event.target.value);
  };

  const onFormSubmit = (event) =>{
    event.preventDefault();
    setTodos([...todos,{id : uuidv4(),title : task,category : category, duedate: date,completed : false}]);
    setTask("");
    setCategory(null);
    setDate(0);
  }

  return(
    <div className="form">
    <form id="list" onSubmit={onFormSubmit}>
      <input 
      type="text" 
      id="todotask" 
      placeholder="Insert Task..." 
      value = {task} 
      required
      onChange={onTaskChange}
      />
      <select id="selectedcategory" required onChange={onCategoryChange}>
        <option value="None">select category</option>
        <option value="category 1">category 1</option>
        <option value="category 2">category 2</option>
        <option value="category 3">category 3</option>
        <option value="category 4">category 4</option>
        <option value="category 5">category 5</option>
      </select> 
      <label> DueDate: </label>
        <input type="date" id="duedate" autocomplete="off" value = {date}  required onChange={onDateChange}></input>
      <button type="submit"><i className="fas fa-plus-square"></i></button>
    </form>
  </div>
)
}

export default Form;
