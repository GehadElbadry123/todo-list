import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';

function App() {
  
  const[x,setx]=useState([]);
  const inputref=useRef();

  const add=()=>{
    const value=inputref.current.value;
    if(value==="")
    {
      alert("Please enter new task")
    }
    else{
    const newdata={completed:false ,value}
    setx([...x,newdata]);
    inputref.current.value="";
    }
      
  }
  const del=(index)=>{
    const newx=[...x];
    newx.splice(index,1);
    setx(newx)
      
  }
  const itemdone=(index)=>{
  const newx = [...x];
  newx[index].completed=!newx[index].completed
  setx(newx);
  }

  return (
    <div className="App">
      <h2>To do List</h2>

      <ul>
        {
          x.map((item,index)=>{

            return <div className='div10'><li className={item.completed ? "diffstyle" : ""}  onClick={()=>itemdone(index)} >{item.value}</li>
            <button onClick={()=>del(index)} className='btn1'>Delete</button>
            </div>
              
          })
        }
      </ul>
       <input ref={inputref} type='text' placeholder='Enter new task' /> 
      
      <button className='btn' onClick={add}>Add</button>
      
    </div>
  );
}

export default App;
