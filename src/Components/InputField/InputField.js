import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import {styles} from './styles.js'
import {getMessage, getError} from '../../Redux/Actions'
import {connect} from 'react-redux'
import {bindActionCreators, compose} from 'redux'

const InputField = (props) => {
  const {getMessage, getError} = props
  const [value, setvalue] = useState()
  const {classes}=props;

  const chatbbot=(input)=>
{
  let result=null
  let error="input incorrect"
  let checked=authenticate(input)
  
    result=checked ? getMessage(eval(input)) : getError(error);
    
}

const authenticate=(input)=>
{
  let check=/([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)$/
 let result= check.test(input)
 return result
}

  return (
    <form  noValidate autoComplete="off">
      <TextField onChange={(e) => setvalue(e.target.value)} id="outlined-basic" label="Message" variant="outlined" required />
      <Button onClick={() => chatbbot(value)} variant="contained" color="primary"> Submit </Button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators ({
    getMessage,
    getError
  },
  dispatch
  )
}

export default connect(null, mapDispatchToProps)(InputField);