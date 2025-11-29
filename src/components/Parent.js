import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent(){

    let [option, setOption] = useState("");


    return <>
         <Child1  setOption= {setOption}/>
         <Child2 setOption = {setOption}/>

         {option && <h1>Selected Option: {option}</h1>}
    </>
}

export default Parent;