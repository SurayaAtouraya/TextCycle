import React from 'react';
import moment from 'moment';
import './Message.css';


function Message(props)
{
	const friendlyTimestamp = moment(props.data.timestamp).format('LLLL');
	return (
      <div className={[
        'message',
      ].join(' ')}>
        {
          props.showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }

        <div className="bubble-container">
          <div className="bubble" title={friendlyTimestamp}>
            { props.data.message }
          </div>
        </div>
      </div>
    );
}

export default Message