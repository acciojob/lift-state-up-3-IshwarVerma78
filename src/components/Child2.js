import React from "react";

function Child2({setOption}){


    return <>
        <h1>Child Component 2</h1>
        <button onClick={()=>(setOption("Option 2"))}>Option 2</button>
       
    </>
}

export default Child2;