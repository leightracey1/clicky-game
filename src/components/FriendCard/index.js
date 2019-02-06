import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    
    <div className  = "sm col-3">
    <div className="card">
      <div className="img-container">
        <img className ="ourImage" alt={props.name} src={props.image} />
      </div>
     
      <span onClick={
        () => { props.setCounter(props.id) 
        
        props.removeFriend(props.id) }
        
        } className="remove">
        𝘅
      </span>
    </div>
    </div>
   
    
  );
}

export default FriendCard;


// props.removeFriend(props.id)
