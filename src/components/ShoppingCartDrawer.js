import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
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

const useStyles = makeStyles( (theme) => ({
  root: {
    // width: '100%',
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    // borderRadius: 4,
    // boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
  },
}));

const ShoppingCartDrawer = (props) => {
  const classes = useStyles();

  const [checkoutDialogIsOpen, setCheckoutDialogIsOpen] = React.useState(false);

  const openCheckoutDialog = () => {
    setCheckoutDialogIsOpen(true);
  };

  const closeCheckoutDialog = () => {
    setCheckoutDialogIsOpen(false);
  };


  return (
    <div>
      <Drawer width={1280} height={'50%'} anchor={'bottom'} open={props.isShoppingCartOpened} onClose={props.toggleShoppingCart(false)}>
        <Typography style={{textAlign: 'center', padding: '16px'}} variant="h4">
          Shopping Cart
       </Typography>
        <List className={classes.root}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Book Name" secondary="Hamilton, ON" />
            <ListItemSecondaryAction>
            <ListItemText secondary="$14.99" style={{float: 'left', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px', margin: 0, marginRight: 8}}/>
              <IconButton edge="end" aria-label="delete">
                <ClearIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Book Name" secondary="Hamilton, ON" />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <ClearIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Book Name" secondary="Toronto, ON" />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <ClearIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        {/* <Grid container spacing={3}>
          <Grid item xs={3}> */}
            <Button onClick={() => openCheckoutDialog()} style={{width: '150px', margin: '16px'}} variant="contained" color="secondary" startIcon={<PaymentIcon />}> Checkout </Button>
          {/* </Grid>
        </Grid> */}
      </Drawer>

      <CheckoutDialog checkoutDialogIsOpen={checkoutDialogIsOpen} closeCheckoutDialog={closeCheckoutDialog}></CheckoutDialog>
    </div>
  );
}

export default ShoppingCartDrawer;