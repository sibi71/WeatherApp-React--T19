import { Button } from '@mui/material'
import React from 'react';
import "./Result.css"
import {RotatingLines} from "react-loader-spinner"

const Result = ({temp,description,icon,setTemp,name,loading}) => {
  return (
    <div className='result'>
       <div className='result__box'>
       <RotatingLines
          strokeColor="white"
          strokeWidth="2"
          animationDuration="0.75"
          width="45"
          visible={loading}
        />
       {!loading &&<div>
            <h1>The Wearther is Currently haze </h1>
            <h3>The Temperature in {name} is {temp}°C</h3>
            <p>Weather Description is {description}</p>
            <img src={icon} alt="wearthericon"/>
            <br></br>
            <Button variant='contained' color='success' 
            onClick={()=>{setTemp("")}}>
                Back
            </Button>
            </div>}
        </div>
    </div>
  )
}

export default Result