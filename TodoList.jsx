import React from 'react'
import { useState } from "react";
import ListItem from './ListItem';
function TodoList() {
  const [todoName, setTodoName]=useState(" ");
  const[list,setList]=useState([]);
  const [toggleSubmit,setToggleSubmit]=useState(true);
  const [edit, setEdit] = useState(null);
 

  
    const updateTodoName= e =>{
      setTodoName(e.target.value);
    }
    const addTodo=()=>{
      if(todoName && !toggleSubmit)
      {
       // console.log(todoName);
       const editedTaskList=list.map((ListItem) =>{
          if(ListItem=== edit){
           // console.log(ListItem.name);
            return {...ListItem,name:todoName}
       }
      return ListItem;
      });
      setList(editedTaskList);
      setToggleSubmit(true);
      setTodoName(' ');
      setEdit(null);
      }
      else{
      setList([...list ,
        {
          name:todoName,
        }]);
      setTodoName(" ");
    }}
   const onDelete = item =>{
     let newList=list.filter(ListItem => {
if(ListItem.name=== item.name){
  return false;
}
return true;
     });
     setList(newList);
   }
   const onEdit = item =>{
     //console.log(item);
     let newList1=list.find(Item =>{
     return Item===item});
  // console.log(newList1.name);
    setToggleSubmit(false);
    setTodoName(newList1.name);
    setEdit(item);
     
    
   }
    return (
      <div className= "todo-contant">
         <h1>Simple TodoList</h1>
        
        <input
          type="text"
          placeholder="new-todo-input"
          className='input-todo'
          value={todoName}
          onChange={updateTodoName}
        />
        {toggleSubmit ? <button onClick={addTodo} className='btn-todo'>Add</button>:
        <button onClick={addTodo} className='btn-todo'>Update</button>
    }
        {
          list.map(item=>
          <ListItem  obj={item} onDelete={onDelete} onEdit={onEdit}/> )
        }
      </div>
    );
      }

export default TodoList
