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
import CarBikeTransport from "../pages/CarBikeTransport.tsx";
import PetRelocation from "../pages/PetRelocation.tsx";
import CommercialShifting from "../pages/CommercialShifting.tsx";
import FAQ from "../pages/FAQ.tsx";
import SafetyStandard from "../pages/SafetyStandard.tsx";
import Delhi from "../pages/CityPages/Delhi.tsx";
import Mumbai from "../pages/CityPages/Mumbai.tsx";
import Kolkata from "../pages/CityPages/Kolkata.tsx";
import Chennai from "../pages/CityPages/Chennai.tsx";
import Bengaluru from "../pages/CityPages/Bengaluru.tsx";
import Hyderabad from "../pages/CityPages/Hyderabad.tsx";
import Pune from "../pages/CityPages/Pune.tsx";
import Goa from "../pages/CityPages/Goa.tsx";
import Guwahati from "../pages/CityPages/Guwahati.tsx";
import Imphal from "../pages/CityPages/Imphal.tsx";
import Ahmedabad from "../pages/CityPages/Ahmedabad.tsx";
import Ghaziabad from "../pages/CityPages/Ghaziabad.tsx";
import Gurgaon from "../pages/CityPages/Gurgaon.tsx";
import Noida from "../pages/CityPages/Noida.tsx";
import Adilabad from "../pages/CityPages/Adilabad.tsx";
import Adoni from "../pages/CityPages/Adoni.tsx";
import Agartala from "../pages/CityPages/Agartala.tsx";
import Ahmednagar from "../pages/CityPages/Ahmednagar.tsx";
import Aizawl from "../pages/CityPages/Aizwal.tsx";
import Ajmer from "../pages/CityPages/Ajmer.tsx";












const AppRoutes = () => {
    return (
        <section style={{width:"100%", overflowX:"hidden"}}>
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
                <Route path="/car-bike-transport" element={<CarBikeTransport></CarBikeTransport>}></Route>
                <Route path="/pet-relocation" element={<PetRelocation></PetRelocation>}></Route>
                <Route path="/commercial-shifting" element={<CommercialShifting></CommercialShifting>}></Route>
                <Route path="/faq" element={<FAQ></FAQ>}></Route>
                <Route path="/safety-standard" element={<SafetyStandard></SafetyStandard>}></Route>
                <Route path="/city/delhi" element={<Delhi></Delhi>}></Route>
                <Route path="/city/guwahati" element={<Guwahati></Guwahati>}></Route>
                <Route path="/city/imphal" element={<Imphal></Imphal>}></Route>
                <Route path="/city/goa" element={<Goa></Goa>}></Route>
                <Route path="/city/pune" element={<Pune></Pune>}></Route>
                <Route path="/city/hyderabad" element={<Hyderabad></Hyderabad>}></Route>
                <Route path="/city/bengaluru" element={<Bengaluru></Bengaluru>}></Route>
                <Route path="/city/chennai" element={<Chennai></Chennai>}></Route>
                <Route path="/city/kolkata" element={<Kolkata></Kolkata>}></Route>
                <Route path="/city/mumbai" element={<Mumbai></Mumbai>}></Route>


                <Route path="/city/ajmer" element={<Ajmer></Ajmer>}></Route>
                <Route path="/city/aizawl" element={<Aizawl></Aizawl>}></Route>
                <Route path="/city/ahmednagar" element={<Ahmednagar></Ahmednagar>}></Route>
                <Route path="/city/agartala" element={<Agartala></Agartala>}></Route>
                <Route path="/city/adoni" element={<Adoni></Adoni>}></Route>
                <Route path="/city/adilabad" element={<Adilabad></Adilabad>}></Route>
                <Route path="/city/noida" element={<Noida></Noida>}></Route>
                <Route path="/city/gurgaon" element={<Gurgaon></Gurgaon>}></Route>
                <Route path="/city/ghaziabad" element={<Ghaziabad></Ghaziabad>}></Route>
                <Route path="/city/ahmedabad" element={<Ahmedabad></Ahmedabad>}></Route>

            </Routes>
            <Footer></Footer>
        </section>
    )

}

export default AppRoutes