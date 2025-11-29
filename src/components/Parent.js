import React, { useState } from "react";
import Child1 from "./Child1.js";
import Child2 from "./Child2.js";

function Parent(){

    let [option, setOption] = useState("");


    return <>
         <Child1  setOption= {setOption}/>
         <Child2 setOption = {setOption}/>

         {option && <p>Selected Option: {option}</p>}
    </>
}

export default Parent;