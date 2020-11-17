import React from 'react';
import Message from './Message'
import './ConvoListItem.css';
import moment from 'moment';
import './MessageList.css'
import './Compose.css'

var messages = [
{
  id: 1,
  author: 'John Smith',
  message: 'Hi there I am interested in this book!',
  timestamp: new Date().getTime()
},
{
  id: 2,
  author: 'Philip James',
  message: 'Is your book still available?',
  timestamp: new Date().getTime()
}
]


function submitMessages(){

    const tempMessages = []
  var friendlyTimestamp ;

    for (var i = 0; i < 2; i++) {
      friendlyTimestamp = moment(messages[i].timestamp).format('LLLL');
      tempMessages.push(
        <Message
          key={i}
          showTimestamp={friendlyTimestamp}
          data={messages[i]}
        />
      );
    }
    return tempMessages;
  }

 class MessageList extends React.Component
 {

  constructor(props)
  {

    super(props)
    this.state = {messagestext: messages, messages : submitMessages()}
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick()
  {
    console.log(document.getElementById("textbox").value)
    var str = document.getElementById("textbox").value;
    var message = {
                    id: Math.random(),
                    message: str,
                    timestamp: new Date().getTime()
                  }
    var newMessage = <Message
          key={Math.random()}
          showTimestamp={message.timestamp}
          data={message}
        />
    var newState = this.state.messages + newMessage 
    this.setState(prevState => ({
                                  messages: [...prevState.messages, newMessage]
}))
  document.getElementById('textbox').value = "";

  }

  render(){
  	return (<div>
      <h1>asas</h1>
      <div className="message-list-container">{this.state.messages}</div>
      <div className="compose">
        <input
          id = "textbox"
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
        />
    </div>
        <button onClick ={this.handleClick}>Send</button>
      </div>)
  }

}
export default MessageList