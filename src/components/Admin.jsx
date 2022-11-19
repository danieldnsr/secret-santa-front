import React from "react";
import "../stylesheets/Admin.css"
import { AiOutlineCloseCircle } from "react-icons/ai"

function Admin({ id ,name, mail, deleteAdmin }){
  return(
    <div className="admin-container">
      <div className="admin-name">
        {name}
      </div>
      <div className="admin-mail">
        {mail}
      </div>
      <div 
        className="icon-container-admin"
        onClick={() => deleteAdmin(id)}
        >
        <AiOutlineCloseCircle className="delete-icon"/>
      </div>
    </div>
  );
}

export default Admin;