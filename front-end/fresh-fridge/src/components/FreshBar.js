import { useState, useEffect} from "react";

import Bar from "./Bar";

export default function FreshBar() {
    const [completed, setCompleted] = useState(0);
  
    useEffect(() => {
      setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
    }, []);
  
    return (
      <div className="App">
        <Bar bgcolor={"#FF0000"} completed={completed} />
      </div>
    );
  }