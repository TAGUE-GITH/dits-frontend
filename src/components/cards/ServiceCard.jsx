import { Link } from "react-router-dom";
import { FiArrowRight, FiLayers } from "react-icons/fi";
import { excerpt } from "../../utils/format";
import "./Cards.css";

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.id}`} className="card card-hover service-card">
      <span className="service-icon">
        <FiLayers />
      </span>
      <h3>{service.title || service.name}</h3>
      <p>{excerpt(service.description, 110)}</p>
      <span className="card-link">
        En savoir plus <FiArrowRight />
      </span>
    </Link>
  );
}