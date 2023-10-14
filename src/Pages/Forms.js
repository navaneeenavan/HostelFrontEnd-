import Navbar from "../Components/navbar"
import AllocationForm from "../Components/allocationForm.jsx"
import FooterComponent from "../Components/footer_Component.jsx"
import Form from "../Components/Form"


function Forms({Student}) {
    return (
        <div className = "flex flex-row min-h-screen bg-zinc-6f00">
            <Navbar/>
            {/* <AllocationForm Student={Student}/> */}
            <Form Student={Student}/>
            
            
        </div>
    )
}

export default Forms
