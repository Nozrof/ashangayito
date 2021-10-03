import { FormControl, FormControlLabel,Checkbox as MuiCheckbox ,makeStyles} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    link:{
      ...theme.typography.body1,
      color: theme.palette.primary.main

    },
}))

export default function Checked(props) {
    const classes= useStyles();
    const {name,label,value,onChange} = props;
    return (
       <FormControl>
           <FormControlLabel
           control={
               <MuiCheckbox
               name={name}
               color="primary"
               checked={value}
               onChange={onChange}
               />
           }
           label={<>{label}<Link to="/" className={classes.link}>privacy and policy</Link></>}
           />
           
       </FormControl>
    )
}
