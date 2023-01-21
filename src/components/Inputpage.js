import React from 'react';
import { Input,Button } from '@mui/material';
import "./Inputpage.css";


const Inputpage = ({input,setInput,findWeather}) => {
    const handleChange = (event)=>{
        setInput(event.target.value)
    }
    const handleClick =(event)=>{
        event.preventDefault();
        findWeather();
    }
  return (
    <div className='inputpage'>
        <div className='inputpage__field'>
            <h1>Google Weather App</h1>
            <p>Powered by</p>
            <img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png' alt='logo'/>
           <form>
            <Input placeholder='Enter Your City Name' 
            onChange={handleChange}
            value={input}
            />
            <br></br>
            <Button variant='contained' color='success' type='submit' onClick={handleClick}>
                Search
            </Button>
            </form>
        </div>
        
    </div>
  )
}

export default Inputpage