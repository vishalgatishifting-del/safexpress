import "../styles/CityPage.scss";

import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedIcon from "@mui/icons-material/Verified";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SecurityIcon from "@mui/icons-material/Security";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PaidIcon from "@mui/icons-material/Paid";

import chargesImg from "../assets/packers & movers charges.webp";
import TrustUsSection from "../components/TrustUsSection";
import { cities } from "../components/CitiesData";
import { pagesData } from "./city-wise-pages-data";
import { useState } from "react";
import CitySchema from "../components/schema/CitySchema";

const SPECIAL_CITIES = ["Ghaziabad", "Agra", "Gurgaon", "Delhi", "Guwahati", "Mumbai", "Amritsar", "Ajmer", "Aligarh", "Hyderabad", "Bengaluru", "Noida", "Chennai", "Ahmedabad", "Almora", "Ahmednagar", "Alappuzha", "Angul", "Ankleshwar", "Arrah", "Asansol", "Anantnag", "Anantapur", "Amravati", "Along", "Akola", "Aizawl", "Adilabad", "Bhilai", "Agartala", "Bhagalpur", "Adoni", "Bareilly", "Ambala","Ballari", "Bagalkot", "Aurangabad", "Balasore", "Ayodhya"];

const WHY_ICONS = [
  <VerifiedIcon />,
  <LocalShippingIcon />,
  <GpsFixedIcon />,
  <PaidIcon />,
  <SupportAgentIcon />,
  <SecurityIcon />,
];

const GenericCityPage = ({ city, img, address }: { city: string; img: string; address: string }) => (
  <>
    {/* HERO */}
    <section className="cp-hero">
      <div className="cp-hero__inner">
        <div className="cp-hero__content">
          <span className="cp-hero__eyebrow">Trusted Relocation Partner</span>
          <h1 className="cp-hero__title">
            Best Packers & Movers in<br />
            <span>{city}</span>
          </h1>
          <div className="cp-hero__address">
            <LocationOnIcon fontSize="small" />
            <span>{address}</span>
          </div>
          <div className="cp-hero__offer-badge">🎉 Get 10% OFF on Your Next Move</div>
          <a className="cp-btn cp-btn--primary" href="/contact-us">
            Get My Free Quote →
          </a>
        </div>
        <div className="cp-hero__image-wrap">
          <img src={img} alt={`Packers and movers in ${city}`} loading="lazy" />
        </div>
      </div>
      <div className="cp-hero__blob cp-hero__blob--1" />
      <div className="cp-hero__blob cp-hero__blob--2" />
    </section>

    {/* INTRO */}
    <section className="cp-section cp-intro">
      <div className="cp-container">
        <p className="cp-intro__text">
          Welcome to Safexpress {city}! Planning to move your home, office, or vehicle within
          or outside {city}? We make relocation <em>simple, safe, and affordable</em>. As one of the most trusted
          packers and movers in {city}, we offer complete packing, loading, transportation, and unpacking under one roof.
        </p>
      </div>
    </section>

    {/* INTERNATIONAL */}
    <section className="cp-section">
      <div className="cp-container">
        <h2 className="cp-heading">🌍 International Packers & Movers in {city}</h2>
        <p>
          Gati Shifting Packers provides seamless international relocation for individuals, families, and businesses.
          Whether moving abroad for work or returning to India — we manage packing to customs clearance.
        </p>
      </div>
    </section>

    {/* SERVICES */}
    <section className="cp-section cp-services">
      <div className="cp-container">
        <h2 className="cp-heading">Our Services in {city}</h2>
        <div className="cp-services__links">
          {[
            { icon: "🏠", title: `Home Shifting`, desc: "Safe and hassle-free home relocation using quality packing materials." },
            { icon: "🏢", title: `Office Shifting`, desc: "Efficient office relocation with minimal downtime." },
            { icon: "🚚", title: "Domestic Relocation", desc: "Door-to-door service anywhere in India with real-time tracking." },
            { icon: "✈️", title: "International Relocation", desc: "Packing, shipping, and customs documentation handled." },
            { icon: "🚗", title: `Vehicle Transport`, desc: "Safe car and bike transport using covered carriers." },
            { icon: "📦", title: "Warehouse & Storage", desc: "Secure 24×7 CCTV-monitored short & long-term storage." },
            { icon: "🛡️", title: "Packing & Unpacking", desc: "Premium foam, bubble wrap, and strong boxes for safe packing." },
            { icon: "🏭", title: "Corporate Relocation", desc: "Large-scale corporate moves with detailed planning and execution." },
          ].map((s, i) => (
            <a href={`/city/${city}`} className="cp-service-link" key={i}>
              <span className="cp-service-link__arrow">→</span>
              {s.icon + s.title}
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* WHY CHOOSE */}
    <section className="cp-section cp-why">
      <div className="cp-container">
        <h2 className="cp-heading">Why Choose Gati Shifting Packers {city}?</h2>
        <div className="cp-why__grid">
          {[
            "Experienced & Verified Movers",
            "High-Quality Packing Material",
            "GPS-Enabled Vehicles for Tracking",
            "Affordable & Transparent Pricing",
            "Trained & Professional Staff",
            "24×7 Customer Support",
          ].map((item, i) => (
            <div className="cp-why__card" key={i}>
              <span className="cp-why__icon">{WHY_ICONS[i]}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className="cp-section cp-process">
      <div className="cp-container">
        <h2 className="cp-heading">How It Works</h2>
        <div className="cp-process__steps">
          {[
            { num: "01", title: "Share Requirement", desc: `Tell us where and when you need to move from ${city}.` },
            { num: "02", title: "Get Instant Quote", desc: "Receive a clear, transparent price estimate." },
            { num: "03", title: "Plan & Confirm", desc: "Choose your date and pay a token amount." },
            { num: "04", title: "Sit Back & Relax", desc: "Our expert team handles everything." },
          ].map((step, i) => (
            <div className="cp-process__step" key={i}>
              <span className="cp-process__num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CHARGES */}
    <section className="cp-section cp-charges">
      <div className="cp-container">
        <h2 className="cp-heading">Packers & Movers Charges in {city}</h2>
        <div className="cp-charges__img-wrap">
          <img src={chargesImg} alt="Packers and movers charges" />
        </div>
        <h3 className="cp-subheading">Factors Affecting Cost</h3>
        <div className="cp-charges__factors">
          {[
            "Distance — Longer distances increase transport cost.",
            "Number of Goods — More items require more labor and truck size.",
            "Floor & Lift Access — Upper floors without lift increase charges.",
            "Time & Season — Weekends and month-end are expensive.",
            "Type of Service — Full-service moves cost more.",
            "Packing Material — Fragile items need extra packaging.",
            "Vehicle Type — Bigger carriers cost more.",
            "Mode of Transport — Road is cheaper than air cargo.",
            "Labor Requirement — More manpower adds cost.",
            "Accessibility — Narrow streets or difficult entry affect cost.",
          ].map((f, i) => (
            <div className="cp-charges__factor" key={i}>
              <span className="cp-charges__factor-num">{i + 1}</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
        <p className="cp-note">
          * Prices are approximate and may vary based on distance, items, and additional services.
        </p>
      </div>
    </section>
  </>
);

const SpecialCityPage = ({ city, img, address, offer, pageData, }: { city: string; img: string; address: string; offer: string; pageData: any; }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      {/* HERO */}
      <section className="cp-hero">
        <div className="cp-hero__inner">
          <div className="cp-hero__content">
            <span className="cp-hero__eyebrow">Premium Relocation Services</span>
            <h1 className="cp-hero__title">
              {pageData?.mainHeading}
              <span className="cp-hero__city-accent"> {city}</span>
            </h1>
            <div className="cp-hero__address">
              <LocationOnIcon fontSize="small" />
              <span>{address}</span>
            </div>
            <div className="cp-hero__offer-badge">🎉 Get {offer} OFF on Your Next Move</div>
            <Link className="cp-btn cp-btn--primary" to="/contact-us">
              Get My Free Quote →
            </Link>
          </div>
          <div className="cp-hero__image-wrap">
            <img src={img} alt={`Packers and movers in ${city}`} loading="lazy" />
          </div>
        </div>
        <div className="cp-hero__blob cp-hero__blob--1" />
        <div className="cp-hero__blob cp-hero__blob--2" />
      </section>

      {/* OVERVIEW */}
      <section className="cp-section cp-intro">
        <div className="cp-container">
          <h2 className="cp-heading">{pageData?.serviceSecondHeading}</h2>
          {Array.isArray(pageData?.paragraph) &&
            pageData.paragraph.map((p: string, i: number) => <p key={i}>{p}</p>)}
        </div>
      </section>

      <section className="cp-international-section">
        <h2>{pageData?.internationalHeading}</h2>
        {Array.isArray(pageData?.internationalParagraph) &&
          pageData.internationalParagraph.map((p: string, i: number) => <p key={i}>{p}</p>)}
      </section>

      {/* SERVICES LINKS */}
      <section className="cp-section cp-services">
        <div className="cp-container">
          <h2 className="cp-heading">{pageData?.servicesHeading}</h2>
          <div className="cp-services__links">
            {pageData?.services?.map((service: any, i: number) => (
              <a key={i} className="cp-service-link" href={service.link}>
                <span className="cp-service-link__arrow">→</span>
                {service.linkText}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="cp-section cp-why">
        <div className="cp-container">
          <h2 className="cp-heading">{pageData?.whyChooseHeading}</h2>
          <p className="cp-why__lead">{pageData?.whyChooseParagraph}</p>
          <ul className="cp-why__grid">
            {pageData?.whyChoose?.map((item: any, i: number) => (
              <div className="cp-why__card" key={i}>
                {/* <span className="cp-why__icon">{WHY_ICONS[i % WHY_ICONS.length]}</span> */}
                <li><strong>{item.title}</strong> - {item.paragraph}</li>
              </div>
            ))}
          </ul>
          <p className="cp-why__note">{pageData?.whyChooseNote}</p>
        </div>
      </section>


      <section className="cp-areas">
        <div className="cp-container">
          <h2 className="cp-heading">{pageData?.areasHeading}</h2>
          <div className="cp-areas__list">
            {pageData?.areas?.map((item: any, i: number) => (
              <div className="cp-areas__card" key={i}>
                {/* <span className="cp-why__icon">{WHY_ICONS[i % WHY_ICONS.length]}</span> */}
                <h3><strong>{item.title}</strong></h3>
                {item.paragraph.map((para: any) => (
                  <p>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="cp-section cp-process">
        <div className="cp-container">
          <h2 className="cp-heading">{pageData?.processHeading}</h2>
          <ol className="cp-process__steps">
            {pageData?.process?.map((step: any, i: number) => (
              <div className="cp-process__step" key={i}>
                {/* <span className="cp-process__num">{String(i + 1).padStart(2, "0")}</span> */}
                <li><strong>{step.title}</strong> - {step.paragraph}</li>
              </div>
            ))}
          </ol>
        </div>
      </section>


      {/* CHARGES */}
      <section className="cp-section cp-charges">
        <div className="cp-container">
          <h2 className="cp-heading">Packers & Movers Charges in {city}</h2>
          <div className="cp-charges__img-wrap">
            <img src={chargesImg} alt={`Packers and Movers Charges ${city}`} />
          </div>
        </div>
      </section>


      <section className="cp-key-factor">
        <div className="cp-container">
          <h2 className="cp-heading">{pageData?.factorsHeading}</h2>
          <ul className="cp-key-factor__list">
            {pageData?.factors?.map((item: any, i: number) => (
              <div className="cp-areas__card" key={i}>
                {/* <span className="cp-why__icon">{WHY_ICONS[i % WHY_ICONS.length]}</span> */}
                <li><strong>{item.heading}</strong> - {item.paragraph}</li>
              </div>
            ))}
          </ul>
        </div>
      </section>

      {/* NEARBY CITIES */}
      <section className="cp-section cp-nearby">
        <div className="cp-container">
          <h2 className="cp-heading">{pageData?.nearbyCitiesHeading}</h2>
          <p>{pageData?.nearbyCitiesParagraph}</p>
          <div className="cp-nearby__grid">
            {pageData?.nearbyCities?.map((item: any, i: number) => (
              <a key={i} className="cp-nearby__card" href={item.link} target="_blank" rel="noreferrer">
                <span className="cp-nearby__name"><LocationOnIcon />{item.linkText}</span>
                {item.text && <span className="cp-nearby__desc">{item.text}</span>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cp-section cp-faq">
        <div className="cp-container">
          <h2 className="cp-heading">{pageData?.faqHeading}</h2>
          <div className="cp-faq__list">
            {pageData?.faqs?.map((item: any, index: number) => (
              <div key={index} className={`cp-faq__item ${openIndex === index ? "cp-faq__item--open" : ""}`}>
                <button className="cp-faq__question" onClick={() => toggleFAQ(index)}>
                  <span>{item.q}</span>
                  <span className="cp-faq__icon">{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="cp-faq__answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const CityPage = () => {
  const { slug } = useParams();
  const normalizedSlug = slug?.toLowerCase();

  const cityImage = cities.find((c) => c.slug.toLowerCase() === normalizedSlug);
  const cityMeta = pagesData.find((p) => p.slug.toLowerCase() === normalizedSlug);

  if (!cityImage || !cityMeta) return <h1>City Not Found</h1>;

  const city = cityMeta.city;
  const img = cityImage.img;
  const metaData = cityMeta.metaDetails;
  const isSpecial = SPECIAL_CITIES.includes(city);

  return (
    <>
      <Helmet>
        <title>{metaData?.title}</title>
        <meta name="description" content={metaData?.description} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Abhishek" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaData?.title} />
        <meta property="og:description" content={metaData?.ogDescription} />
        <meta property="og:url" content={`https://safeshiftingpackers.com/city/${slug}`} />
        <meta property="og:site_name" content="Safexpress" />
        <meta property="og:image" content={`https://safeshiftingpackers.com/${img}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaData?.title} />
        <meta name="twitter:description" content={metaData?.twitterDescription} />
        <meta name="twitter:image" content={img} />
        <meta http-equiv="Content-Language" content="en" />
        <link rel="canonical" href={`https://safeshiftingpackers.com/city/${slug}`} />


      </Helmet>
      <CitySchema cityMeta={cityMeta} />
      <main className="cp-root">
        {isSpecial ? (
          <SpecialCityPage
            city={city}
            img={img}
            address={cityMeta.address}
            offer={cityMeta.offer}
            pageData={cityMeta.pageData}
          />
        ) : (
          <GenericCityPage
            city={city}
            img={img}
            address={cityMeta.address}
          />
        )}
        <TrustUsSection />
      </main>
    </>
  );
};

export default CityPage;