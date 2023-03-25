import { useState } from "react"
import "./addnote.css"
import Navbar from "../navbar/navbar"
const Addnote=()=>{

    const [data,setdata]=useState({
        title:"",
        descrption:""
    })
    const handlechange=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    return (
    <>
    <Navbar/>
<div id="main-container-2">
    <div>
        <label>Title</label><br/>
        <input placeholder="Title" name="Tilte" type="text" onChange={handlechange} />
    </div>
    <div>
        <label>Description</label><br/>
        <input id="last-child" placeholder="What's on your mind?" name="description" type="text" onChange={handlechange} />
    </div>
    <div ><button id="button">Add Note</button></div>
</div>
    </>)
}
export default Addnote