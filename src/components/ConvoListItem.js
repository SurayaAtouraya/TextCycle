import './ConvoListItem.css';
import React from 'react';
import pic1 from "./../img/35.jpg"
import pic2 from "./../img/90.jpg"
import pic3 from "./../img/43.jpg"
import pic4 from "./../img/49.jpg"


const pics = [pic1,pic2,pic3,pic4]

function ConvoListItem(props){
	return (
      <div className="conversation-list-item">
      	<img className="conversation-photo" src={pics[props.photo]} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{props.name}</h1>
          <p className="conversation-snippet">{props.text}</p>
        </div>
      </div>
	)
}

export default ConvoListItem