import getInTouchImg from "../assets/get-in-touch.png";
import PinterestIcon from "@mui/icons-material/Pinterest";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../styles/GetInTouch.scss";
import { COMPANY } from "../config/Company";

// ── Types ──────────────────────────────────────────────────────────────────
interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
}

// ── Data ───────────────────────────────────────────────────────────────────
const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: <CallIcon />,
    label: "Call Us",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: <EmailIcon />,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    value: "Chat with us now",
    href: COMPANY.whatsapp,
  },
  {
    icon: <LocationOnIcon />,
    label: "Coverage",
    value: "Pan India — 500+ cities",
  },
];

const SOCIAL_LINKS: SocialLink[] = [
  { icon: <InstagramIcon />, href: COMPANY.instagram, ariaLabel: "Instagram" },
  { icon: <FacebookIcon />,  href: COMPANY.facebook,  ariaLabel: "Facebook"  },
  { icon: <XIcon />,         href: COMPANY.twitter,   ariaLabel: "X / Twitter"},
  { icon: <LinkedInIcon />,  href: COMPANY.linkedin,  ariaLabel: "LinkedIn"  },
  { icon: <YouTubeIcon />,   href: COMPANY.youtube,   ariaLabel: "YouTube"   },
  { icon: <PinterestIcon />, href: COMPANY.pinterest, ariaLabel: "Pinterest" },
];

// ── Component ──────────────────────────────────────────────────────────────
const GetInTouch = () => {
  return (
    <section id="get-in-touch" aria-labelledby="git-heading">
      <div className="git-inner">

        {/* ── Left: Image side ─────────────────────────── */}
        <div className="git-img-side">
          <img
            src={getInTouchImg}
            alt="Gati Shifting Packers team"
            title="Get In Touch"
            loading="lazy"
            decoding="async"
          />
          <div className="git-img-overlay" aria-hidden="true" />

          {/* Available badge */}
          <div className="git-img-badge" aria-hidden="true">
            <span className="git-img-badge__dot" />
            <span>Available 24 x 7</span>
          </div>

          {/* Caption */}
          <div className="git-img-caption">
            <h3>India's Trusted Relocation Partner</h3>
            <p>Serving 500+ cities across the country</p>
          </div>
        </div>

        {/* ── Right: Details side ──────────────────────── */}
        <div className="git-details">
          <p className="git-eyebrow">Contact Us</p>
          <h2 id="git-heading" className="git-title">Get In Touch</h2>
          <p className="git-desc">
            For reliable shifting services across India, choose Safexpress PVT LTD. We provide door-to-door transport and affordable
            logistics solutions.
          </p>

          {/* Contact items */}
          <ul className="git-contact-list" role="list">
            {CONTACT_ITEMS.map((item, i) => {
              const content = (
                <>
                  <span className="git-contact-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="git-contact-text">
                    <span className="git-contact-label">{item.label}</span>
                    <span className="git-contact-value">{item.value}</span>
                  </span>
                </>
              );

              return (
                <li key={i} className="git-contact-item">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="git-contact-link"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="git-contact-link git-contact-link--static">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="git-divider" role="separator" aria-hidden="true" />

          {/* Social links */}
          <p className="git-social-label">Follow Us</p>
          <div className="git-social-row" role="list">
            {SOCIAL_LINKS.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="git-social-btn"
                aria-label={s.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;