import { useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { getArticleById } from "../api/articleApi";
import useFetch from "../hooks/useFetch";
import { formatDate } from "../utils/format";
import PageHeader from "../components/ui/PageHeader";
import DataState from "../components/ui/DataState";
import "./Detail.css";

export default function ArticleDetail() {
  const { id } = useParams();
  const fetcher = useCallback(() => getArticleById(id), [id]);
  const { data: article, loading, error } = useFetch(fetcher);

  const image = article?.imageUrl || article?.image;
  const date = article?.publishedAt || article?.createdAt;

  return (
    <>
      <PageHeader
        title={article?.title || "Article"}
        parent={{ to: "/articles", label: "Articles" }}
      />
      <section className="section">
        <div className="container article-page">
          <DataState loading={loading} error={error} empty={!article}>
            <article>
              {image && (
                <img className="article-cover" src={image} alt={article?.title} />
              )}
              {date && (
                <span className="badge article-meta">{formatDate(date)}</span>
              )}
              <div className="detail-content">{article?.content}</div>
            </article>
            <Link to="/articles" className="back-link" style={{ marginTop: "2rem" }}>
              <FiArrowLeft /> Retour aux articles
            </Link>
          </DataState>
        </div>
      </section>
    </>
  );
}