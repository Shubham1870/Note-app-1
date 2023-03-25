import Navbar from "../navbar/navbar"

const Landing=()=>{
    return (
        <>
        <Navbar/>
        <div id="search">
         <span><input placeholder="Search" /> <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button></span>   
        </div>

        </>
    )
}
export default Landing