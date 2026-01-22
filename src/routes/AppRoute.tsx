import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home.tsx"
import TopBar from "../components/TopBar.tsx";
import Navbar from "../components/Navbar";
import Contact from "../pages/Contact.tsx";


const AppRoutes = () => {
    return (
        <section>
            <TopBar />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </section>
    )

}

export default AppRoutes