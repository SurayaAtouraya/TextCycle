import './ConvoListItem.css';

import React from 'react';

function ConvoListItem(props){
	return (
      <div className="conversation-list-item">
        <div className="conversation-info">
          <h1 className="conversation-title">{props.name}</h1>
          <p className="conversation-snippet">{props.text}</p>
        </div>
      </div>
	)
}

export default ConvoListItem