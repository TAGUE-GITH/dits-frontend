import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { navLinks } from "../../data/navigation";
import "./Footer.css";

const accountLinks = [
  { to: "/connexion", label: "Connexion" },
  { to: "/inscription", label: "Créer un compte" },
  { to: "/mon-espace", label: "Mon espace client" },
  { to: "/mot-de-passe-oublie", label: "Mot de passe oublié" },
];

const socials = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            DITS<em>Group</em>
          </Link>
          <p>
            Digital IT Solutions : des solutions numériques fiables et
            modernes pour accompagner la croissance de votre entreprise.
          </p>
          <div className="footer-socials">
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>Navigation</h4>
          <ul>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Mon compte</h4>
          <ul>
            {accountLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>
              <FiMail /> contact@ditsgroup.com
            </li>
            <li>
              <FiPhone /> +33 1 00 00 00 00
            </li>
            <li>
              <FiMapPin /> Paris, France
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} DITS Group. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}