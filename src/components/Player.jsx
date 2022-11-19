import React from "react";
import "../stylesheets/Player.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

function Player({ id ,name, mail, deletePlayer }){
  return(
    <div className="player-container">
      <div className="player-name">
        {name}
      </div>
      <div className="player-mail">
        {mail}
      </div>
      <div 
        className="icon-container"
        onClick={() => deletePlayer(id)}
        >
        <AiOutlineCloseCircle className="delete-icon"/>
      </div>
    </div>
  );
}

export default Player;