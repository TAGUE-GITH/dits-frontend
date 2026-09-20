import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { excerpt, formatDate } from "../../utils/format";
import "./Cards.css";

export default function ArticleCard({ article }) {
  const image = article.imageUrl || article.image;
  const summary = article.summary || article.content;
  const date = article.publishedAt || article.createdAt;

  return (
    <Link to={`/articles/${article.id}`} className="card card-hover article-card">
      <div className="article-image">
        {image ? (
          <img src={image} alt={article.title} loading="lazy" />
        ) : (
          <span>DITS</span>
        )}
      </div>
      <div className="article-body">
        {date && <span className="badge">{formatDate(date)}</span>}
        <h3>{article.title}</h3>
        <p>{excerpt(summary, 110)}</p>
        <span className="card-link">
          Lire l'article <FiArrowRight />
        </span>
      </div>
    </Link>
  );
}