import { Link } from "react-router-dom";
import { FiArrowRight, FiLayers } from "react-icons/fi";
import { excerpt } from "../../utils/format";
import "./Cards.css";

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.id}`} className="card card-hover service-card">
      {service.imageUrl ? (
        <img
          className="service-image"
          src={service.imageUrl}
          alt={service.title}
          loading="lazy"
        />
      ) : (
        <span className="service-icon">
          <FiLayers />
        </span>
      )}
      <h3>{service.title}</h3>
      <p>{excerpt(service.description, 110)}</p>
      <span className="card-link">
        En savoir plus <FiArrowRight />
      </span>
    </Link>
  );
}