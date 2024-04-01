import Navbar from "../Components/navbar"
import Confirmation from "../Components/confirmation"
function confirmation() {
    return (
        <div className = "flex flex-row min-h-screen bg-zinc-6f00">
            <Navbar/>
            <Confirmation/> 
        </div>
    )
}
export default confirmation
