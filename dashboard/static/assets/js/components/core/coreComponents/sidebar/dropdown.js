// dropdown.js
import React, { useState } from "react";
import { Sidebar } from "./sideBar";



export function DropVal(){

    const [inputValue, setInputValue] = useState("");
    

    const handleInputChange = (value) => {
      setInputValue(value);
    };

    return (
        <div>
          <DropVal inputValue={inputValue} onInputChange={handleInputChange} />
          {/* Other components or content */}
        </div>
      );

}

export function Dropdown(props){

    console.log(props)
    return <h1>{props.sideItem}</h1>

}