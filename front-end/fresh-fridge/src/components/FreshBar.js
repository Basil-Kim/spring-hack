
import React, { useState, useEffect } from "react";
import Bar from "./Bar";
import './ListItem.css';

function FreshBar(){
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (


    <div id="card">
      <div id="circle"></div>

      <div id="item">Placeholder</div>
     
        <Bar bgcolor={"#6a1b9a"} completed={completed} />

      
        
        </div>
     
   

      

  );
}

export default FreshBar;