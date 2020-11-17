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
						{name:"John Smith",text:"Is it still available?",photo:0},
						{name:"Joe Shirma",text:"This is a message",photo:1},
						{name:"Philip James",text:"Hello!",photo:2},
						{name:"Sam Deesa",text:"I'm interested!",photo:3}
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