import React from 'react';
import ConvoListItem from './ConvoListItem'
import moment from 'moment';
import './ConversationList.css'


  class ConversationList extends React.Component
  {
    constructor(props){
      super(props)    
    }

  render()
  {	

  	const conversations = [
						{name:"John Smith",text:"This is a message",photo:0},
						{name:"Joe Shmoe",text:"This is a message",photo:1},
						{name:"Philip James",text:"This is a message",photo:2},
						{name:"Sam Mom",text:"This is a message",photo:3}
					];

  	return (<div>
  				<h1>Messages</h1>

  			<div className="conversation-search">
		        <input
		          type="search"
		          className="conversation-search-input"
		          placeholder="Search Messages"
		        />
		    </div>
  				{conversations.map(conversation =>
            <ConvoListItem
              key={conversation.name}
              text = {conversation.text}
              name = {conversation.name}
              photo = {conversation.photo}
            />)}
  			
  			</div>)
  }

 }

export default ConversationList