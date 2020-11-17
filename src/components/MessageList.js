import React from 'react';
import Message from './Message'
import './ConvoListItem.css';
import moment from 'moment';
import './MessageList.css'
import './Compose.css'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
];


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
                    timestamp: new Date().getTime(),
                    author: 'user'
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
      <div className="message-list-container">{this.state.messages}</div>
          <div className="compose">
            <TextField id="textbox" placeholder="Type a message, @name" variant="outlined" style={{width: '75%'}}
            />
            <Button variant="contained" color="primary" onClick ={this.handleClick} style={{fontSize: '1.5rem', borderRadius: 0}}>SEND</Button>
          </div>
      </div>
      )
  }

}
export default MessageList