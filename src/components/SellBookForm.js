import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel,Input, FormHelperText,Button, MenuItem,Select,TextField} from '@material-ui/core';
import './SellBookForm.css'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
	  borderRadius: 4,
	  boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
	  width: 750,
	  height: 475,
	  padding: 24,
	//   overflow: 'hidden'
	},
  }));

function SellBookForm(props){
	
	const classes = useStyles();

	const [courseName, setCourseName] = React.useState('');

	const [isListingCreated, setIsListingCreated] = React.useState(false);

	const handleChange = (event) => {
		setCourseName(event.target.value);
	};

	const handleClick = () => {
		console.info('You clicked the Chip.');
	};

	const createListing = () => {
		props.createListing({name: 'Name test', course: 'COMPSCI', sellerLocation: 'New York City, NY', price: 25, id: null});
		setIsListingCreated(true);
	}

	  if (!isListingCreated) {
		return (
			<Paper elevation={0} className={classes.root}>
				{/* <FormControl> */}
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<h1 style={{textAlign: 'center', margin: '1rem 0'}}>Create Book Listing</h1>
						</Grid>
						<Grid item xs={6}>
							<Grid container spacing={2}>
	
								{/* Book Name */}
								<Grid item xs={12} >
									<FormControl style={{width: '100%'}}>
										<TextField label="Book Name" />
									</FormControl>
								</Grid>
	
								{/* Course Name */}
								<Grid item xs={12} >
									<FormControl style={{width: '100%'}}>
										<InputLabel>Course Name</InputLabel>
										<Select value={courseName} onChange={handleChange}>
										<MenuItem value={10}>COMPSCI 4E03</MenuItem>
										<MenuItem value={20}>MATH 1Z03</MenuItem>
										<MenuItem value={30}>ENVIRSCI 1C03</MenuItem>
										<MenuItem value={40}>PHYSICS 1E03</MenuItem>
										</Select>
									</FormControl>
								</Grid>
	
								{/* Book Description */}
								<Grid item xs={12} style={{margin: '8px 0'}}>
									<FormControl style={{width: '100%'}}>
										<TextField multiline rows={4} label="Book Description" variant="outlined"/>
									</FormControl>
								</Grid>
	
								{/* Edition */}
								<Grid item xs={6}>
									<FormControl style={{width: '100%'}}>
										<TextField label="Book Edition" />
									</FormControl>
								</Grid>
	
								{/* Price */}
								<Grid item xs={6}>
								<FormControl fullWidth className={classes.margin} variant="outlined">
									<InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
									<OutlinedInput
										startAdornment={<InputAdornment position="start">$</InputAdornment>}
										labelWidth={60}
									/>
								</FormControl>
								</Grid>
	
							</Grid>
							{/* <h2>Book Name</h2> */}
							
						</Grid>
						<Grid item xs={6}>
						<DropzoneArea
							acceptedFiles={['image/*']}
							dropzoneText={"Upload Images of Book"}
							onChange={(files) => console.log('Files:', files)}
						/>
						<div>
							<h3 style={{textAlign: 'center', color: '#9e9e9e', fontWeight: 'normal', margin: '11.5px 0'}}> Delivery Options </h3>
							<Chip label="Pickup Only" onClick={handleClick} variant="outlined"/>
							<Chip label="Shipping Only" onClick={handleClick} variant="outlined" style={{margin: '0 16px'}}/>
							<Chip label="Pickup or Shipping" onClick={handleClick} variant="outlined"/>
						</div>
	
						</Grid>
					</Grid>
					<Divider style={{marginTop: 16}} />
					<Button color="primary" style={{marginTop: 16, float: 'right'}}
							onClick={() => createListing()}>Create Listing</Button>
			</Paper>
				
			   )
	  } else {
		return (
		<Paper elevation={0} className={classes.root}>
			<h1 style={{textAlign: 'center', marginBottom: '3rem'}}>Book Listing Created!</h1>
			<CheckCircleIcon style={{ fontSize: 200, margin: '0 auto', display: 'block', color: 'green'}} />
			<div style={{textAlign: 'center', marginTop: '5rem'}}>
				<Button color="primary" component={Link} to="/userlistings">View Listings</Button>
				<Button color="primary" style={{marginLeft: '2rem'}} onClick={() => setIsListingCreated(false)}>Create Listing</Button>
			</div>
		</Paper>
		);
	  }
	
}

export default SellBookForm