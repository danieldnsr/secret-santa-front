import React, { useState } from "react";
import "../stylesheets/FormAdmin.css"
import { v4 as uuidv4 } from "uuid"

function FormAdmin(props){

  const [input, setInput] = useState({
    nameAdmin : "",
    mailAdmin : ""
  })

  function handleChange(e) {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value
    });
  }

  const sendForm = e => {
    e.preventDefault();
    
    const newAdmin = {
      id : uuidv4(),
      name : input.nameAdmin,
      mail : input.mailAdmin
    }
    props.onSubmit(newAdmin);
  }

  return(
    <form 
      className="form-admin"
      onSubmit={sendForm}>
      <input 
        className="name-input"
        type="text"
        placeholder="Escribe el nombre"
        name="nameAdmin"
        onChange={handleChange}
      />
      <input 
        className="mail-input"
        type="email"
        placeholder="Escribe el correo"
        name="mailAdmin"
        onChange={handleChange}
      />
      <button className="button-admin">Agregar admin</button>
    </form>
  )
}

export default FormAdmin