import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    
  
    <div className="card">
      <div className="img-container">
        <img className ="ourImage"  onClick={
        () => { props.setCounter(props.id) 
        
        props.removeFriend(props.id) }
        
        } className="remove"className="img-fluid" alt="Responsive image" alt={props.name} src={props.image} />
      </div>
     
    </div>
    
   
    
  );
}

export default FriendCard;


// props.removeFriend(props.id)
