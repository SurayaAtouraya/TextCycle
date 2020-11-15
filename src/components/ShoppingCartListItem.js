import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import ClearIcon from '@material-ui/icons/Clear';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Typography from '@material-ui/core/Typography';
import PaymentIcon from '@material-ui/icons/Payment';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CheckoutDialog from './dialogs/CheckoutDialog';
import { DeleteCartItemContext } from './../App';
  
  const ShoppingCartListItem = (props) => {

    return (
      <div>
        <ListItem button>
            <ListItemAvatar>
                <Avatar>
                <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText style={{width: '100%'}} primary={props.item.name} secondary={props.item.sellerLocation} />
            <ListItemText secondary={"$" + props.item.price.toString()} style={{textAlign: 'right', margin: 0, marginRight: 16}}/>
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => props.deleteCartItem(props.item)}>
                <ClearIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
      </div>
    )
  }

export default ShoppingCartListItem;