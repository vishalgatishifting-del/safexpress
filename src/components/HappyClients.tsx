import "../styles/HappyClients.scss";
import ONGC from "../assets/HappyClients/ONGC_Logo.png"
import reliance from "../assets/HappyClients/reliance-industries.png"
import sbi from "../assets/HappyClients/SBI.webp"
import bharatPetroleum from "../assets/HappyClients/Bharat-Petroleum.webp"
import indianOil from "../assets/HappyClients/indianoil.png"
import gail from "../assets/HappyClients/gail.png"
import itc from "../assets/HappyClients/itc.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface Client {
  name: string;
  logo: string;
}


const HappyClients = () => {


  const clients: Client[] = [
    { name: "ONGC", logo: ONGC },
    { name: "Reliance", logo: reliance },
    { name: "State Bank of India", logo: sbi },
    { name: "Bharat Petroleum", logo: bharatPetroleum },
    { name: "Indian Oil", logo: indianOil },
    { name: "GAIL", logo: gail },
    { name: "ITC", logo: itc },
  ];
  return (
    <div className="happy-clients">
      <h2>Happy Clients</h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={0}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {clients.concat(clients).map((client, index) => (
          <SwiperSlide key={index}>
            <div className="client-card">
              <img src={client.logo} alt={client.name} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default HappyClients;
