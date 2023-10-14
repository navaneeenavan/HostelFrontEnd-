import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: props.width },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField id={props.type} label={props.label} variant="outlined" />
    </Box>
  );
}


  export function SelectTextFields(props) {
    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
  
      // Call the onOptionChange callback with the selected value
      if (props.onChange) {
        props.onChange(selectedValue);
      }
    };
  
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: props.width },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        
        <TextField
            id={props.type}
            select
            label={props.label} 
            helperText={props.helperText}
            onChange={handleSelectChange}
          >
           {props.options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          </div>
    </Box>
    );
 }