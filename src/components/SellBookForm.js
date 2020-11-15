import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel,Input, FormHelperText,Button, MenuItem,Select,TextField} from '@material-ui/core';
import './SellBookForm.css'

function SellBookForm(props){
	return (
			<FormControl>
			  <h2>Name of Book</h2>
			  <Input id="my-input" aria-describedby="my-helper-text" placeholder = "Enter the name of your Book."/>
			  <InputLabel htmlFor="my-input"></InputLabel>
			  <h2>Add Photos</h2>
			  <Button variant="contained" component="label">
			  	<input type="file" aria-describedby="my-helper-file"/>
			  </Button>
			  <FormHelperText id="my-helper-file">Upload images of your Book.</FormHelperText>
			  <h2>Book Category</h2>
			  <InputLabel id="demo-simple-select-helper-label"></InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          placeholder = "Software"
          // value={age}
          // onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>Chemistry</MenuItem>
          <MenuItem value={20}>Physics</MenuItem>
          <MenuItem value={30}>Math</MenuItem>
          <MenuItem value={40}>Computer</MenuItem>
          <MenuItem value={50}>Software</MenuItem>
          <MenuItem value={60}>Other</MenuItem>
        </Select>
	  	<FormHelperText id="my-helper-file">Select Book Category</FormHelperText>
        <br></br>
	  <h2>Book Description</h2>
        <TextField placeholder="Enter a description of your book here."
  			multiline
  			rows={4}
  			rowsMax={4}
		/>
		<br></br>
	  <h2>Price</h2>
		<TextField
          id="standard-number"
          placeholder = "$0.00"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
	  <FormHelperText id="my-helper-text">Enter the price of your book.</FormHelperText>
	  <br></br>
	  <div id="container1">
	  	<Button id ="button1" variant="contained">Cancel</Button>
	  	<div class="divider"/>
	  	<Button id ="button2"  variant="contained" color="primary" /*onClick ={}*/> Submit </Button>
	  </div>		
			</FormControl>
		   )
}

export default SellBookForm