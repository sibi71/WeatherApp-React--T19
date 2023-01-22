import React,{useState} from 'react';
import "./App.css"
import Inputpage from './components/Inputpage/Inputpage';
import axios from "axios"
import Result from './components/Result/Result';


const App = () => {
const [input, setInput] = useState("");
const [temp, setTemp] = useState("");
const [description, setDescription] = useState("");
const [icon, setIcon] = useState("");
const [name, setName] = useState("");
const [loading, setLoading] = useState(true);

const findWeather = async()=>{
  
  try{
    setLoading(true)
  const unit = "metric";
  const url ="https://api.openweathermap.org/data/2.5/weather?q="+input+"&appid=f3a419ab7ab02bcafdccf93381e74575" + "&units="+unit ;
  const res = await axios.get(url);
  const temp = await res.data.main.temp;
  const description =await res.data.weather[0].description;
  const icon = await res.data.weather[0].icon;
  const imgurl = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
  const name = res.data.name;

  setTemp(temp);
  setDescription(description);
  setIcon(imgurl);
  setName(name);
  setLoading(false);
 
  }
  catch(err){
    alert(err.response.data.message);
  }
}
  return (
    < div className='app'>
    {temp === "" ?
        ( <Inputpage 
          input={input} 
          setInput={setInput} 
          findWeather={findWeather} 
          loading={loading}
          />
        ):(
       <Result 
          temp={temp}
          description={description}
          icon={icon} 
          name={name} 
          setTemp={setTemp} 
         
           />
  
        )}
    </div>
  )
}

export default App