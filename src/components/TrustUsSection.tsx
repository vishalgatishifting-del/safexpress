import CollectionsIcon from '@mui/icons-material/Collections';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from "react-router-dom";
import "../styles/TrustUsSection.scss";
import { COMPANY } from "../config/Company";

const TrustUsSection = () => {

    const items = [
        {
            icon: <CollectionsIcon />,
            title: "Photo Gallery",
            desc: "See real shifting photos",
            link: "/photo-gallery",
            type: "internal"
        },
        {
            icon: <PlayCircleIcon />,
            title: "Video Gallery",
            desc: "Watch live shifting videos",
            link: "/video-gallery",
            type: "internal"
        },
        {
            icon: <WhatsAppIcon />,
            title: "WhatsApp Chat",
            desc: "Instant support available",
            link: COMPANY.whatsapp,
            type: "external"
        },
        {
            icon: <CallIcon />,
            title: "Call Now",
            desc: "Talk to our expert",
            link: `tel:${COMPANY.phone}`,
            type: "external"
        }
    ];

    return (
        <section id="trust-us">

            <div className="header">

                <div className="badge">
                    <VerifiedIcon />
                    Trusted Packers & Movers
                </div>

                <h2>Trust Us With Confidence</h2>

                <p>
                    Verify our reliability through real photos, videos, and direct contact
                </p>

            </div>

            <div className="grid">

                {items.map((item, index) => {

                    const CardContent = (
                        <>
                            <div className="icon">
                                {item.icon}
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.desc}</p>
                        </>
                    );

                    return item.type === "internal" ? (

                        <Link key={index} to={item.link} className="card">
                            {CardContent}
                        </Link>

                    ) : (

                        <a key={index} href={item.link} className="card">
                            {CardContent}
                        </a>

                    );

                })}

            </div>

        </section>
    );
};

export default TrustUsSection;
