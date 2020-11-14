import React from 'react';
import ConversationList from './ConversationList';


  class Messenger extends React.Component
  {
    constructor(props){
      super(props)
    
    }



    render()
    {
      const dummyData = [
        {
          message: "1: This should be in left",
          direction: "left"
        },
        {
          message: "2: This should be in right",
          direction: "right"
        },
        {
          message: "3: This should be in left again",
          direction: "left"
        },
        {
          message: "4: This should be in right again",
          direction: "right"
      }
      ];

      const styles = {
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  channelList: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  chat: {
    display: "flex",
    flex: 3,
    flexDirection: "column",
    borderWidth: "1px",
    borderColor: "#ccc",
    borderRightStyle: "solid",
    borderLeftStyle: "solid",
  },
  settings: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
};

    
      return (
        <div className="scrollable sidebar">
          <ConversationList />
        </div>

        // <div className="scrollable content">
          // <MessageList />
        // </div>
              )
              
  }
}



export default Messenger