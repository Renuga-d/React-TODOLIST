//import { Button } from "bootstrap";
import React from "react";


function ListItem(props) {

  return (
    <div className="ListItem">
      <p className="list_name">{props.obj.name}</p>
      <button className='btn-todo' onClick={() => props.onEdit(props.obj)}>Edit</button>
      <button className='btn-todo' onClick={() => props.onDelete(props.obj)} >Delete</button>
    </div>
  )
}

export default ListItem
