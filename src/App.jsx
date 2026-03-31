import React, { useState } from 'react';

function App(){
  const [num1,setNum1]= useState("")
  const  [num2,setNum2]= useState("")
  const [result,setResult] =useState("")

    const add =()=> setResult(Number(num1)+ Number(num2));
    const sub =()=> setResult(Number(num1)- Number(num2));
    const mul =()=> setResult(Number(num1)* Number(num2));
    const div =()=> setResult(Number(num1)/ Number(num2)  

  )

  return(
    <div style={{ textAlign:"center", marginTop:"50px"}}>
     <h1> SIMPLE CALCULATOR</h1>

  
  <input style={{ height:"60px", width:" 250px",borderRadius:"60px",fontSize:"30px"}} placeholder ="first number"
   value={num1} onChange={(e)=> setNum1(e.target.value)}/>
   <br />
   <br />


   



  < input style={{ height:"60px", width:" 250px",borderRadius:"60px",fontSize:"30px"}}placeholder ="second number"
   value={num2}
   onChange={(e) => setNum2(e.target.value)}/>
   <br />
   <br />


<div> 
  <button style={{fontSize:"50px", padding:"5px" }} onClick={add}>+</button>
    <button style={{fontSize:"50px", padding:"5px"}} onClick={sub}>-</button>
     <button style={{fontSize:"50px",padding:"5px"}} onClick={mul}>*</button>
      <button style={{fontSize:"50px",padding:"5px"}} onClick={div}>/</button>
      </div>
   


      <h1> Result :{result}</h1>

      <button  style={{ borderRadius:"70px",height:"60px",width:"150px", backgroundColor:"green",color:"white",fontSize:"30px"}}onClick={()=>{
        setNum1("")
        setNum2("")
        setResult("")
      }}>Reset</button>
      </div>
      
  );
}
export default App;