import React from 'react';
import List from '@material-ui/core/List';
import ShoppingCartListItem from './ShoppingCartListItem';

const ShoppingCartList = (props) => {

  const shoppingCartListItems = props.shoppingCart.map((item) => {
      return (
        <div key={item.id}> 
          <ShoppingCartListItem item={item}></ShoppingCartListItem>
        </div>
      );
    });

  return (
    <div>
        <List>
            {shoppingCartListItems}
        </List>
    </div>
    )
  }

export default ShoppingCartList;