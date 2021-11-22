import React,{useState} from 'react';
import './App.css';
import Header from './componnents/Header';
import Form from './componnents/Form';
import List from './componnents/List';

const App=()=>{

  const[task ,setTask] = useState("");
  const[category ,setCategory] = useState("");
  const[date ,setDate] = useState(0);
  const[todos ,setTodos] = useState([]);

  return (
    <div className="App">

    <Header/>

    <Form
    task = {task}
    setTask = {setTask}
    category = {category}
    setCategory = {setCategory}
    date = {date}
    setDate = {setDate} 
    todos = {todos}
    setTodos = {setTodos}
    />

    <List
    todos = {todos}
    setTodos = {setTodos}    
    />

    </div>
  );
}

export default App;
