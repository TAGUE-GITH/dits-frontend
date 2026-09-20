import { FiAward, FiClock, FiLock, FiUsers } from "react-icons/fi";
import SectionTitle from "../ui/SectionTitle";

const features = [
  { icon: FiAward, title: "Expertise", text: "Une équipe qualifiée et à jour sur les technologies actuelles." },
  { icon: FiClock, title: "Réactivité", text: "Des délais maîtrisés et un suivi régulier de chaque projet." },
  { icon: FiLock, title: "Sécurité", text: "La protection de vos données au cœur de nos réalisations." },
  { icon: FiUsers, title: "Accompagnement", text: "Un interlocuteur dédié avant, pendant et après la livraison." },
];

export default function Features() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionTitle
          tag="Pourquoi nous choisir"
          title="Un partenaire de confiance"
          text="Des engagements concrets pour réussir vos projets numériques."
        />
        <div className="grid">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="feature">
              <span className="feature-icon">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}