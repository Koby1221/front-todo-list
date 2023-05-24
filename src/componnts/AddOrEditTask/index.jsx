import { useState } from "react";
import axios from "axios";
import apiRequest from "../../function/index"
function AddOrEditTask({count,setCount,data,method,url,setDisplayPutTask}) {
    
    const [title,setTitle]=useState(data && data.title);
    const [content,setContent]=useState(data && data.content);
    const [urgency,setUrgency]=useState(data && data.urgency);
    const [isDone,setIsDone]=useState(data? data.isDone : false);
    
    const send=()=>{
        let obj={
        title:title, 
        content:content,
        urgency:urgency,
        isDone:isDone
    }
    apiRequest(url,method,obj).then((data)=>{
        console.log(data);
        setCount(count +1)
        setDisplayPutTask(null)},(err)=>{
        console.log("err=" ,err)});
    }
    return (
        <div>
        <h3>title</h3>
        <input defaultValue={title} onChange={(event)=>{setTitle(event.target.value)}}/> 
        <h3>content</h3>
        <input defaultValue={content} onChange={(event)=>{setContent(event.target.value)}}/> 
        <h3>urgency</h3>
        <input  type="checkbox" value="1" onChange={(event)=>{setUrgency(event.target.value)}}/>
        <label> Level 1</label>
        <input  type="checkbox" value="2"  onChange={(event)=>{setUrgency(event.target.value)}}/>
        <label> Level 2</label>
        <input  type="checkbox" value="3"  onChange={(event)=>{setUrgency(event.target.value)}}/>
        <label> Level 3</label>
        <button  style={{ margin:" 10px", background: "#4CAF50"}} onClick={send}> send</button>
        <button  style={{ margin:" 10px", background: "#4CAF50"}} onClick={()=>{setDisplayPutTask(null)}}>cancel</button>
        </div>
    )
}

export default AddOrEditTask;
