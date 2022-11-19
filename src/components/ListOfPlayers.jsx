import React from "react";
import { useState } from "react";
import "../stylesheets/ListOfPlayers.css"
import FormPlayer from "./FormPlayer";
import Player from "./Player";
import FormAdmin from "./FormAdmin";
import axios from "axios"
import Admin from "./Admin";

function ListOfPlayers(){
  
  const [dataPlayers, setDataPlayers] = useState([])
  const [dataAdmin, setDataAdmin] = useState([])

  const deletePlayer = id => {
    const updatedPlayers = dataPlayers.filter( dataPlayer => dataPlayer.id !== id);
    setDataPlayers(updatedPlayers);
  }

  const addPlayer = player => {
    if (player.name.trim() && player.mail.trim()){
      player.name = player.name.trim();
      player.mail = player.mail.trim();
      const playerUpdated = [player, ...dataPlayers];
      const repeatedPlayerNames = dataPlayers.filter( dataPlayer => dataPlayer.name == player.name);
      const repeatedPlayerMails = dataPlayers.filter( dataPlayer => dataPlayer.mail == player.mail);
      if (repeatedPlayerNames.length){
        alert("Ojo con eso manito, no se pueden repetir nombres.")
      }else if(repeatedPlayerMails.length){
        alert("Ojo con eso manito, no se pueden repetir correos.")
      }else(setDataPlayers(playerUpdated))
      
    }
  }

  const deleteAdmin = id => {
    setDataAdmin([]);
  }

  const addAdmin = admin => {
    setDataAdmin(admin)
  }

  function submitData() {
    // Simple POST request with a JSON body using axios
    const admin = dataAdmin
    const players = dataPlayers
    const data = new Object()
    data["admin"] = admin
    data["players"] = players
    console.log(data)
    axios.post('http://127.0.0.1:8000/emails/', data)
        .then(response => { 
          console.log(response)
          console.log(response.data)
         });
  };

  return(
    <>
      <h2>administrator "optional"</h2>
        <FormAdmin onSubmit={addAdmin}/>
          <Admin 
            id={dataAdmin.id}
            name={dataAdmin.name}
            mail={dataAdmin.mail}
            deleteAdmin = {deleteAdmin}
            />
      <h2>Players "min 2, dont repeat a player email."</h2>
        <FormPlayer onSubmit={addPlayer} />
        <div className="tareas-lista-contenedor">
          {
            dataPlayers.map((dataPlayer)=>
              <Player 
                key={dataPlayer.id}
                id={dataPlayer.id}
                name={dataPlayer.name}
                mail={dataPlayer.mail}
                deletePlayer = {deletePlayer}
              />
            )
          }
        </div>
      <div className="submit-container">
      <button 
      className="submit-button"
      onClick={submitData}
      >Send email
      </button>
      </div>
    </>
  );
}

export default ListOfPlayers