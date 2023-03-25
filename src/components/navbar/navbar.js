import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
const Navbar=()=>{
const navigate=useNavigate()
const logoutbutton=()=>{
    localStorage.setItem("authtoken","")
    localStorage.setItem("id","")
    navigate("/")
}

return (
    <>
        <div id="main-container1">
            <div id="bar">
                <span>
                <Link to="/home"><i class="fa-solid fa-house"></i>Home</Link></span>
                <span><Link to="/addnote" ><i class="fa-solid fa-plus"></i>Add Note</Link></span>
                <span><i class="fa-solid fa-xmark"></i>Delete</span>
                <span><i class="fa-solid fa-file-export"></i>Export</span>
                <span><button onClick={logoutbutton}><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</button></span>
            </div>
        </div>
        
    </>
)
}
export default Navbar 