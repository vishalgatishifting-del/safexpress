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
import PrivacyPolicy from "../pages/PrivacyPolicy.tsx";
import TermsCondition from "../pages/TermsCondition.tsx";
import PhotoGallery from "../pages/PhotoGallery.tsx";
import VideoGallery from "../pages/VideoGallery.tsx";
import WhoWeAre from "../pages/WhoWeAre.tsx";
import WhySafexpress from "../pages/WhySafexpress.tsx";
import HomeShifting from "../pages/HomeShifting.tsx";
import OfficeRelocation from "../pages/OfficeRelocation.tsx";



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
                <Route path="/privacy-policy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
                <Route path="/terms-condition" element={<TermsCondition></TermsCondition>}></Route>
                <Route path="/photo-gallery" element={<PhotoGallery></PhotoGallery>}></Route>
                <Route path="/video-gallery" element={<VideoGallery></VideoGallery>}></Route>
                <Route path="/who-we-are" element={<WhoWeAre></WhoWeAre>}></Route>
                <Route path="/why-safexpress" element={<WhySafexpress></WhySafexpress>}></Route>
                <Route path="/home-shifting" element={<HomeShifting></HomeShifting>}></Route>
                <Route path="/office-relocation" element={<OfficeRelocation></OfficeRelocation>}></Route>
            </Routes>
            <Footer></Footer>
        </section>
    )

}

export default AppRoutes