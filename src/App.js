import './App.css';
import React, { useState ,useEffect } from 'react';
import { Receipes } from './components/Recepes';
import { ShowData } from './components/ShowData';





function App() 
{

   const [data,setData] = useState({});

  const handleText = (e) =>
  {
    const {name , value } = e.target;
    setData({...data, [name]: value});
  }
  



  const handleSubmit = (e) =>
  {
    
    e.preventDefault();

    fetch("http://localhost:5000/data", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      setData({});
    });


    





  }







  return (
    <div className="App">
     <div className='main_one'>
       <div>
          <h2>
            Enter Recepe :
          </h2>
          <form  onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Enter Title"  onChange={handleText} />
            <br />
            <input type="text" name="ingedients" placeholder="Enter Ingredients" onChange={handleText} />
            <br />
            <input type="text" name="time" placeholder="Enter Cooking Time" onChange={handleText} />
            <br />
            <input type="text" name="image" placeholder="Enter Image Link" onChange={handleText} />
            <br />
            <input type="text" name="instructions" placeholder="Enter Instructions" onChange={handleText} />
            <br />
            <button type="submit">Submit</button>  
          </form>
       </div>
       <div>
          <Receipes />
      </div>
     </div>
     <div>
      <ShowData />
     </div>
    </div>
  );
}

export default App;
