import "../styles/HappyClients.scss";
import ONGC from "../assets/HappyClients/ONGC_Logo.png"
import reliance from "../assets/HappyClients/reliance-industries.png"
import sbi from "../assets/HappyClients/SBI.webp"
import bharatPetroleum from "../assets/HappyClients/Bharat-Petroleum.webp"
import indianOil from "../assets/HappyClients/indianoil.png"
import gail from "../assets/HappyClients/gail.png"
import itc from "../assets/HappyClients/itc.png"

const clients = [
  { name: "ONGC", logo: ONGC },
  { name: "Reliance", logo: reliance },
  { name: "State Bank of India", logo: sbi },
  { name: "Bharat Petroleum", logo: bharatPetroleum },
  { name: "Indian Oil", logo: indianOil },
  { name: "GAIL", logo: gail },
  { name: "ITC", logo: itc },
];

const HappyClients = () => {
  return (
    <section className="happy-clients">
      <h2>Happy Clients of Safe Express</h2>

      <div className="clients-row">
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyClients;
