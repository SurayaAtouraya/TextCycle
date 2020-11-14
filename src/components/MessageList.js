import Message from './Message'
import './ConvoListItem.css';
import moment from 'moment';
import './MessageList.css'

function submitMessages(){

     var messages = [
        {
          id: 1,
          author: 'apple',
          message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          timestamp: new Date().getTime()
        },
        {
          id: 2,
          author: 'orange',
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime()
        },
        {
          id: 3,
          author: 'orange',
          message: 'Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.',
          timestamp: new Date().getTime()
        },
        {
          id: 4,
          author: 'apple',
          message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
          timestamp: new Date().getTime()
        }
      ]


  	const tempMessages = []
	var friendlyTimestamp ;

  	for (var i = 0; i < 4; i++) {
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

function MessageList()
{
	return (<div className="message-list-container">{submitMessages()}</div>)
}


export default MessageList