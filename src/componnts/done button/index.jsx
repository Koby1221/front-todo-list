import apiRequest from "../../function/index"

function DoneButton({count,setCount,data,method,url}) {
    const send=()=>{
        let obj={
        title:data.title, 
        content:data.content,
        urgency:data.urgency,
        isDone:!data.isDone
      }
    apiRequest(url,method,obj).then((data)=>{
        setCount(count +1)},(err)=>{
        console.log("err=" ,err)});
    }
    return (
        <div >
            <button style={{background:" #FF4444"}}   onClick={send}>DONE</button>
        </div>
    )
}

export default DoneButton;
