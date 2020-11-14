import React from 'react';
import ConvoListItem from './ConvoListItem'
import './ConvoListItem.css';


  class ConversationList extends React.Component
  {
    constructor(props){
      super(props)
    
    }


  render()
  {	

  	const conversations = [
						{name:"George Name",text:"This is a message"},
						{name:"John Smith",text:"This is a message"},
						{name:"Joe Shmoe",text:"This is a message"},
						{name:"Philip James",text:"This is a message"},
						{name:"Sam Mom",text:"This is a message"}
					];
  	return (<div>
  			<div className="conversation-search">
		        <input
		          type="search"
		          className="conversation-search-input"
		          placeholder="Search Messages"
		        />
		    </div>
  				<h1>Messages</h1>
  				{conversations.map(conversation =>
            <ConvoListItem
              key={conversation.name}
              text = {conversation.text}
              name = {conversation.name}
            />)}
  			</div>)
  }

 }

export default ConversationList