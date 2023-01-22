import { Button } from '@mui/material'
import React from 'react';
import "./Result.css"


const Result = ({temp,description,icon,setTemp,name}) => {
  return (
    <div className='result'>
       <div className='result__box'>
      <div>
            <h1>The Wearther is Currently haze </h1>
            <h3>The Temperature in {name} is {temp}°C</h3>
            <p>Weather Description is {description}</p>
            <img src={icon} alt="wearthericon"/>
            <br></br>
            <Button variant='contained' color='success' 
            onClick={()=>{setTemp("")}}>
                Back
            </Button>
            </div>
        </div>
    </div>
  )
}

export default Result