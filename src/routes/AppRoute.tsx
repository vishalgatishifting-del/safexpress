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
import ScrollToTop from "../config/ScrollToTop.tsx";

import { pagesData } from "../pages/city-wise-pages-data"

import CityPage from "../pages/CityPage"








const AppRoutes = () => {
    return (
        <ScrollToTop>
            <section style={{ width: "100%", overflowX: "hidden" }}>
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
                  

                    {
                        pagesData.map((page) => (
                            <Route path={`/city/${page.slug}`} element={<CityPage city={page.city} img={page.img} metaData={page.metaDetails} offer={page.offer} pageData={page.pageData} address={page.address}></CityPage>
                            }>

                            </Route>
                        ))
                    }
                </Routes>
                <Footer></Footer>
            </section>
        </ScrollToTop>
    )

}

export default AppRoutes