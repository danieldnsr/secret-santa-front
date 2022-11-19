import React, { useState } from "react";
import "../stylesheets/FormPlayer.css"
import { v4 as uuidv4 } from "uuid"

function FormPlayer(props){

  const [input, setInput] = useState({
    namePlayer : "",
    mailPlayer : ""
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
    
    const newPlayer = {
      id : uuidv4(),
      name : input.namePlayer,
      mail : input.mailPlayer
    }
    props.onSubmit(newPlayer);
  }

  return(
    <form 
      className="form-player"
      onSubmit={sendForm}>
      <input 
        className="name-input"
        type="text"
        placeholder="Escribe el nombre"
        name="namePlayer"
        onChange={handleChange}
      />
      <input 
        className="mail-input"
        type="email"
        placeholder="Escribe el correo"
        name="mailPlayer"
        onChange={handleChange}
      />
      <button className="button-player">Agregar jugador</button>
    </form>
  )
}

export default FormPlayer