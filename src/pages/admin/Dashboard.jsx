import { Link } from "react-router-dom";
import { FiBriefcase, FiInbox, FiMail, FiUserCheck } from "react-icons/fi";
import { getDashboardStats } from "../../api/dashboardApi";
import useFetch from "../../hooks/useFetch";
import AdminHeader from "../../components/admin/AdminHeader";
import StatBar from "../../components/admin/StatBar";
import DataState from "../../components/ui/DataState";
import "./Dashboard.css";

const GOLD = "var(--gold)";
const BLUE = "#3b82f6";
const GREEN = "var(--success)";
const RED = "var(--danger)";

const kpis = [
  { key: "pendingUsers", label: "Comptes à valider", icon: FiUserCheck, to: "/admin/utilisateurs", alert: true },
  { key: "pendingRequests", label: "Demandes en attente", icon: FiInbox, alert: true },
  { key: "pendingApplications", label: "Candidatures à traiter", icon: FiBriefcase, alert: true },
  { key: "activeNewsletterSubscribers", label: "Abonnés newsletter", icon: FiMail },
];

const sections = [
  {
    title: "Utilisateurs",
    stats: [
      ["totalUsers", "Total"],
      ["activeUsers", "Actifs"],
      ["pendingUsers", "En attente"],
      ["disabledUsers", "Désactivés"],
    ],
  },
  {
    title: "Contenus",
    stats: [
      ["totalServices", "Services"],
      ["totalProjects", "Réalisations"],
      ["totalArticles", "Articles"],
      ["totalPartners", "Partenaires"],
      ["totalDocuments", "Documents"],
    ],
  },
  {
    title: "Demandes",
    stats: [["totalRequests", "Total"]],
    bar: [
      ["pendingRequests", "En attente", GOLD],
      ["inProgressRequests", "En cours", BLUE],
      ["processedRequests", "Traitées", GREEN],
      ["rejectedRequests", "Refusées", RED],
    ],
  },
  {
    title: "Offres d'emploi",
    stats: [
      ["totalJobOffers", "Total"],
      ["publishedJobOffers", "Publiées"],
      ["unpublishedJobOffers", "Masquées"],
    ],
  },
  {
    title: "Candidatures",
    stats: [["totalApplications", "Total"]],
    bar: [
      ["pendingApplications", "En attente", GOLD],
      ["inReviewApplications", "En étude", BLUE],
      ["acceptedApplications", "Acceptées", GREEN],
      ["rejectedApplications", "Refusées", RED],
    ],
  },
  {
    title: "Newsletter",
    stats: [
      ["totalNewsletterSubscribers", "Total"],
      ["activeNewsletterSubscribers", "Actifs"],
      ["unsubscribedNewsletterSubscribers", "Désabonnés"],
    ],
  },
];

export default function Dashboard() {
  const { data: stats, loading, error } = useFetch(getDashboardStats);

  return (
    <>
      <AdminHeader
        title="Tableau de bord"
        text="Vue d'ensemble de l'activité de DITS Group."
      />
      <DataState loading={loading} error={error} empty={!stats}>
        <div className="kpis">
          {kpis.map(({ key, label, icon: Icon, to, alert }) => {
            const value = stats?.[key] ?? 0;
            const Tag = to ? Link : "div";

            return (
              <Tag
                key={key}
                to={to}
                className={`card kpi ${alert && value > 0 ? "kpi-alert" : ""}`}
              >
                <span className="kpi-icon">
                  <Icon />
                </span>
                <div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </Tag>
            );
          })}
        </div>

        <div className="stat-sections">
          {sections.map(({ title, stats: items, bar }) => (
            <div key={title} className="card stat-card">
              <h3>{title}</h3>
              <div className="stat-list">
                {items.map(([key, label]) => (
                  <div key={key} className="stat-item">
                    <strong>{stats?.[key] ?? 0}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              {bar && <StatBar items={bar} stats={stats || {}} />}
            </div>
          ))}
        </div>
      </DataState>
    </>
  );
}