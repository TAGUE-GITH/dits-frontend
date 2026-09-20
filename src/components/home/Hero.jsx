import { FiCloud, FiCode, FiShield } from "react-icons/fi";
import Button from "../ui/Button";

const highlights = [
  { icon: FiCode, title: "Développement", text: "Applications web sur mesure" },
  { icon: FiCloud, title: "Cloud & Data", text: "Infrastructures fiables et évolutives" },
  { icon: FiShield, title: "Sécurité", text: "Vos données protégées" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="fade-up">
          <span className="hero-tag">Digital IT Solutions</span>
          <h1>
            Des solutions numériques qui font <span>avancer</span> votre
            entreprise
          </h1>
          <p className="hero-text">
            DITS Group vous accompagne de la conception à la mise en production
            avec des outils modernes, fiables et pensés pour durer.
          </p>
          <div className="hero-actions">
            <Button to="/services">Découvrir nos services</Button>
            <Button to="/contact" variant="light">
              Nous contacter
            </Button>
          </div>
        </div>

        <div className="hero-visual">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="hero-card">
              <span className="hero-card-icon">
                <Icon />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}