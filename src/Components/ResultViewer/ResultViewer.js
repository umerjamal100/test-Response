import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
const ResultViewer = (props) => {
  
  
return (<div>{props.message}</div>)
}

const mapStateToProps = state => {
    return {
      message: state.message
    };
  };

export default connect(mapStateToProps)(ResultViewer)