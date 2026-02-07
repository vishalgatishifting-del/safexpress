// import AwardCertification from "../components/AwardCertification";
// import BrandList from "../components/BrandsList";
// import FAQList from "../components/FAQList";
// import GetInTouch from "../components/GetInTouch";
// import ReviewVideo from "../components/ReviewVideos";
// import TrustUsSection from "../components/TrustUsSection";
import petrelocationImg from "../assets/PetRelocation/petrelocation.png"
import { Helmet } from "react-helmet-async";

// import "./PetRelocation.scss"
// import ReviewDialog from "../components/ReviewDialog";

import "../styles/Common.scss"

import FAQ from "../components/FAQ.tsx";
const PetRelocation = () => {

    // const keywords = [
    //     "pet transport services",
    //     "pet relocation services",
    //     "pet shipping companies",
    //     "dog transport service",
    //     "pet transport",
    //     "animal transport services",
    //     "pet delivery service",
    //     "cat transport services",
    //     "dog relocation services",
    //     "pet relocation near me",
    //     "international pet relocation",
    //     "pet travel services",
    //     "safe pet transport",
    //     "pet relocation cost",
    //     "how to relocate a pet",
    //     "gati packers and movers"
    // ];

    return (
        <>

            <Helmet>

                {/* Meta Tags for Pet Relocation Page */}
               

            </Helmet>
            {/* <div className="bg-attached">
                <h1>Pet Relocation</h1>
            </div> */}
            <section id="pet-relocation-sec" className="top-element">
                <div className="container">
                    <h1>Safexpress – Trusted Pet Relocation Services in India</h1>
                    <p>Safexpress is a reliable name in pet relocation services across India, ensuring safe, comfortable, and stress-free travel for your beloved pets. Whether you’re moving to a new city or state, our professional team handles every aspect of your pet’s journey with care, making relocation hassle-free for both pets and owners.
                        <br />
                        With experience in relocating cats, dogs, and other domestic pets, Safexpress is known for safe handling, timely updates, and compassionate care. We provide real-time tracking, health check coordination, and transportation arrangements that meet all safety standards for pet travel.

                    </p>
                    <div className="content 6-steps">
                        <h2>🏡 Simple 6-Step Booking Process with Safexpress</h2>

                        <h3>Step 1: Share Your Moving Details & Get a Quote</h3>
                        <ul>
                            <li>📋 Provide your moving requirements — items, location, and distance.</li>
                            <li>💬 Get a fair, customized quote from our verified professionals.</li>
                        </ul>

                        <h3>Step 2: Confirm Booking with Advance Payment</h3>
                        <ul>
                            <li>📅 Choose your preferred pickup date and time.</li>
                            <li>💳 Secure your booking by paying a small advance (adjusted later).</li>
                        </ul>

                        <h3>Step 3: Safe Packing & Doorstep Pickup</h3>
                        <ul>
                            <li>🔧 Our trained team arrives with top-quality packing materials to pack your belongings carefully.</li>
                            <li>✔ Dismantling, labeling, and secure loading are done under expert supervision.</li>
                        </ul>

                        <h3>Step 4: Transparent Invoice & Payment Settlement</h3>
                        <ul>
                            <li>📄 Receive a detailed invoice based on your provided list.</li>
                            <li>💸 Pay the remaining amount after deducting your advance payment.</li>
                        </ul>

                        <h3>Step 5: Secure Transportation & Real-Time Updates</h3>
                        <ul>
                            <li>🚛 Your goods are dispatched safely to the destination.</li>
                            <li>📱 Track your shipment with live updates until delivery.</li>
                        </ul>


                        <h3>Step 6: Hassle-Free Delivery & Feedback</h3>
                        <ul>
                            <li>🏠 After delivery and reinstallation, share your valuable feedback to help us serve you better.
                                <br />
                            </li>

                            {/* <ReviewDialog></ReviewDialog> */}
                        </ul>
                    </div>
                    <div className="content types">
                        <h2>Types of Pets We Relocate</h2>
                        <ul>
                            <li>Dogs: All breeds, small to large.</li>
                            <li>Cats: Domestic cats of all sizes.</li>
                            <li>Other Pets: Rabbits, birds, and other small domestic animals.</li>
                        </ul>

                        <h2>Affordable Pet Relocation Charges in India</h2>
                        <p>
                            We provide cost-effective pet relocation services with transparent pricing. Whether it’s local transport or intercity relocation, Safexpress ensures your pet travels safely and comfortably at competitive rates, with no hidden charges.
                        </p>


                        <img src={petrelocationImg} />
                    </div>
                    <div className="content why-choose">
                        <h2>Why Choose Professional Pet Relocation Services in India?</h2>
                        <ul>
                            <li>Safe & Comfortable Travel: Pets are transported in secure, climate-controlled carriers.</li>
                            <li>Experienced Handling: Trained professionals ensure minimal stress for your pets.</li>
                            <li>Health & Documentation Support: Assistance with vaccination certificates and travel permits.</li>
                            <li>Real-Time Tracking: Stay updated on your pet’s journey at all times.</li>
                            <li>Stress-Free Experience: Complete care from pickup to delivery, letting you relax while your pet is transported safely.</li>
                        </ul>
                    </div>
                    <div className="content factors">
                        <h2>Factors Affecting the Cost of Pet Relocation in India</h2>
                        <p>The cost of house shifting depends on several things. Here are the main factors that affect the price:</p>

                        <ol>
                            <li>Distance -
                                Longer distances increase cost due to more travel time and logistics.

                            </li>
                            <li>Pet Type & Size -
                                Larger pets or multiple animals require bigger carriers and extra care, raising the cost.

                            </li>
                            <li>
                                Travel Method -
                                Air transport, ground transport, or a combination affects pricing. Enclosed or specialized carriers add to the cost.

                            </li>
                            <li>
                                Health & Documentation Needs -
                                Vaccination certificates, permits, and veterinary checks may increase charges slightly.

                            </li>
                            <li>
                                Timing & Urgency -
                                Peak seasons or urgent relocations can cost more than planned, scheduled moves.

                            </li>
                        </ol>
                    </div>
                </div>
            </section>


            {/* <ReviewVideo></ReviewVideo>
            <GetInTouch></GetInTouch>
            <AwardCertification></AwardCertification>
            <TrustUsSection></TrustUsSection>
            <BrandList></BrandList>
            <FAQList></FAQList>

            <section id="keywords-section">
                <h1>People also search for these Queries</h1>
                <div className="container">
                    {keywords.map((col) => {
                        return <h5 className="keyword">{col}</h5>
                    })}
                </div>
            </section> */}

            <FAQ />

        </>
    )
}

export default PetRelocation;