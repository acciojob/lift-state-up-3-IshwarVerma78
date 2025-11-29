import React from "react";

function Child1({setOption}){


    return <>
        <h1>Child Component 1</h1>
        <button onClick={()=>(setOption("Option 1"))}>Option 1</button>
    </>
}

export default Child1;