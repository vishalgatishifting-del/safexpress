import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home.tsx"
import About from "../pages/About.tsx"
import Service from "../pages/Service.tsx"
import TopBar from "../components/TopBar.tsx";
import Navbar from "../components/Navbar";
import Contact from "../pages/Contact.tsx";
import Footer from "../components/Footer.tsx";
import Storage from "../pages/Storage.tsx";
import CarStorage from "../pages/CarStorage.tsx";
import BikeStorage from "../pages/BikeStorage.tsx";





const AppRoutes = () => {
    return (
        <section>
            <TopBar />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/Service" element={<Service></Service>}></Route>
                <Route path="/contact-us" element={<Contact></Contact>}></Route>
                <Route path="/storage" element={<Storage></Storage>}></Route>
                <Route path="/car-storage" element={<CarStorage></CarStorage>}></Route>
                <Route path="/bike-storage" element={<BikeStorage></BikeStorage>}></Route>
            </Routes>
            <Footer></Footer>
        </section>
    )

}

export default AppRoutes