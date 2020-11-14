import React from 'react';

  class Users extends React.Component
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
    
      return (
              <div>
                <h1>This is a Users page</h1>
                <h1>This is asaa</h1>
              </div>);
              }
  }

export default Users