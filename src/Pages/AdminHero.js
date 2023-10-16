import AdminHeroComponent from "../Components/adminHeroComponent.jsx"
import AdminNavBar from "../Components/adminNavBar.jsx"
function AdminHero({Student}) {
    return (
        <div className= "flex flex-row ">
            <AdminNavBar />
            <AdminHeroComponent Student= {Student} />
        </div>
    )
}

export default AdminHero
