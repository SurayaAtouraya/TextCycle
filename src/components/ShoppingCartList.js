import React from 'react';
import List from '@material-ui/core/List';
import ShoppingCartListItem from './ShoppingCartListItem';

const ShoppingCartList = (props) => {

  const shoppingCartListItems = props.shoppingCart.map((item) => {
      return (
        <div key={item.id}> 
          <ShoppingCartListItem item={item} deleteCartItem={props.deleteCartItem}></ShoppingCartListItem>
        </div>
      );
    });

  if (shoppingCartListItems.length === 0) {
    return (
      <div>
          <List>
              <h3 style={{textAlign: 'center'}}>Empty Shopping Cart</h3>
          </List>
      </div>
      )
    } 
  else {
    return (
      <div>
          <List>
              {shoppingCartListItems}
          </List>
      </div>
      )
    }
  }


export default ShoppingCartList;