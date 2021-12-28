

import React, { useState} from "react";
import './Styles.css'


const Form=()=> {
  const[name,setName]=useState("");
  const[dept,setDept]=useState("");
  const[rank,setRank]=useState("");
  const[list,setList]=useState([]);
  const[txtchnge,setTextchng]=useState(true);

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={name,dept,rank}
    if(name&&dept&&rank){
      setList((ls)=>[...ls,data])
      setName("")
      setDept("")
      setRank("")
      setTextchng(false)
    }
  }
   

  return (
    <div className="App">

    {txtchnge?  
      <div id='main'>
            <h1>Employee Feedback Form</h1>
            <form onSubmit={handleSubmit}>
            <label >Name :</label>
            <input type="text" id='fname' name='name' value={name} onChange={(e)=>setName(e.target.value)} /> <br/> <br/> 

            <label>Department :</label>
            <input type="text" id='dept' name='dept' value={dept} onChange={(e)=>setDept(e.target.value)} /> <br/><br/> 

            <label>Rating :</label>
            <input type="number" id='rank' name='rank' value={rank} onChange={(e)=>setRank(e.target.value)}/> <br/><br/> 
            <button  id='submit'>Submit</button>

            </form>
        </div>
        :
        <>
            <h1>Employee Feedback Data</h1>
          <div className="box">
          {
            list.map((a)=>
            <div className="box1">
            
            <p>Name: {a.name} | Department: {a.dept} | Rating: {a.rank}</p>
            
            </div>)
            
          }
          </div>
          <br/>
          <button onClick={ ()=>setTextchng(true)}>Go back</button>
          </>
    }
    </div>
    
   
  );
}


export default Form;
