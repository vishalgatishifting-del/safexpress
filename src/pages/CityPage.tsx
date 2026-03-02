import "../styles/CityPage.scss";
import "../styles/Common.scss";

import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";

import LocationOnIcon
    from "@mui/icons-material/LocationOn";

import chargesImg
    from "../assets/CityPages/packers & movers charges.webp";

import { COMPANY }
    from "../config/Company";

import FAQ from "../components/FAQ";
import TrustUsSection
    from "../components/TrustUsSection";

import { cities }
    from "../components/CitiesData";

import { pagesData }
    from "./city-wise-pages-data";




const CityPage = () => {

    const { slug } = useParams();

const normalizedSlug =
  slug?.toLowerCase();

const cityImage = cities.find(
  c => c.slug.toLowerCase() === normalizedSlug
);

const cityMeta = pagesData.find(
  p => p.slug.toLowerCase() === normalizedSlug
);

    // const capitalizeFirst = (text: string = "") =>
    //     text.charAt(0).toUpperCase() +
    //     text.slice(1);

    // IMAGE FIND
    // const formattedCity =
    //     capitalizeFirst(slug || "");

    // const cityImage = cities.find(
    //     c => c.city === formattedCity
    // );

    // // META FIND
    // const cityMeta = pagesData.find(
    //     p =>
    //         p.slug.toLowerCase()
    //         === slug?.toLowerCase()
    // );

    if (!cityImage || !cityMeta)
        return <h1>City Not Found</h1>;

    const city = cityMeta.city;
    const img = cityImage.img;
    const metaData = cityMeta.metaDetails;
    const offer = cityMeta.offer;
    const address = cityMeta.address;
    const keywords = cityMeta.keywords
    console.log(keywords)
    return (
        <>
            <Helmet>
                <title>{metaData?.title}</title>

                <meta name="description" content={metaData?.description} />
                <meta name="keywords" content={metaData?.keywords} />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Abhishek" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Packers and Movers in Bhiwandi | Safexpress" />
                <meta property="og:description" content={metaData?.ogDescription} />
                <meta property="og:url" content="https://gatishiftingpackers.com/city/bhiwandi" />
                <meta property="og:site_name" content="Safexpress" />
                <meta property="og:image" content="" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Packers and Movers in Bhiwandi | Safexpress" />
                <meta name="twitter:description" content={metaData?.twitterDescription} />
                <meta name="twitter:image" content="" />

                <meta http-equiv="Content-Language" content="en" />

                {/* Canonical URL */}
                <link rel="canonical" href={`https://gatishiftingpackers.com/city/${city}`} />
            </Helmet>
            <section id="city-page" className="top-element">
                {/* HERO */}
                <div className="city-hero">

                    {/* LEFT CONTENT */}
                    <div className="hero-content">

                        <div className="badge">
                            🚚 Trusted Packers & Movers
                        </div>

                        <h1>
                            Best Packers & Movers in
                            <span> {city}</span>
                        </h1>

                        <p className="address">
                            <LocationOnIcon />
                            {address}
                        </p>

                        <div className="offer">
                            🎉 Flat {offer} OFF • Limited Time Offer
                        </div>

                        <div className="buttons">

                            <Link to="/contact-us" className="primary-btn">
                                Get Free Quote
                            </Link>

                            <a href={`tel:+91${COMPANY.phone}`} className="secondary-btn">
                                Call Now
                            </a>

                        </div>

                        <div className="trust">
                            ⭐ 4.9 Rating • 1000+ Happy Customers
                        </div>

                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="hero-image">

                        <div className="image-box">

                            <img
                                src={img}
                                alt={`Packers and Movers in ${city}`}
                                loading="eager"
                            />

                        </div>

                    </div>

                </div>


                {/* CONTENT */}
                <div className="city-content">
                    <p>
                        Welcome to <strong>Safexpress {city}</strong>. We provide safe,
                        affordable and professional relocation services for homes, offices,
                        vehicles and international moves.
                    </p>

                    <h2>🌍 International Packers & Movers in {city}</h2>
                    <p>
                        We manage complete international relocation including packing, customs
                        clearance and global delivery through our trusted logistics network.
                    </p>

                    <h2>Our Packers & Movers Services in {city}</h2>

                    <div className="service-list">
                        <div>🏠 Home Shifting Services</div>
                        <div>🏢 Office Relocation</div>
                        <div>🚚 Domestic Relocation</div>
                        <div>✈️ International Moving</div>
                        <div>🚗 Car & Bike Transport</div>
                        <div>📦 Packing & Unpacking</div>
                        <div>🏭 Corporate Relocation</div>
                        <div>🏬 Warehouse & Storage</div>
                    </div>

                    <h2>Why Choose Safexpress {city}?</h2>
                    <ul className="why-list">
                        <li>Experienced & Verified Movers</li>
                        <li>Premium Packing Materials</li>
                        <li>GPS Enabled Vehicles</li>
                        <li>Affordable Transparent Pricing</li>
                        <li>Transit Insurance</li>
                        <li>24×7 Support</li>
                    </ul>

                    <h2>Packers & Movers Charges in {city}</h2>
                    <div className="charges">
                        <img src={chargesImg} alt="Packers and Movers Charges{city}" />
                    </div>

                    <h2>Factors Affecting Moving Cost</h2>
                    <ol>
                        <li>Distance</li>
                        <li>Volume of Goods</li>
                        <li>Floor & Lift Availability</li>
                        <li>Season & Timing</li>
                        <li>Type of Services</li>
                    </ol>
                </div>
            </section>


            {/* <ReviewVideo></ReviewVideo>
            <GetInTouch></GetInTouch>
            <AwardCertification></AwardCertification>
            <TrustUsSection></TrustUsSection>
            <BrandList></BrandList>
            <FAQList></FAQList> */}
            <TrustUsSection />
            <FAQ />
        </>
    )
}

export default CityPage;