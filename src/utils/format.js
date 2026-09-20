const contractLabels = {
  STAGE: "Stage",
  ALTERNANCE: "Alternance",
  CDD: "CDD",
  CDI: "CDI",
  FREELANCE: "Freelance",
  AUTRE: "Autre",
};

export const contractLabel = (value) => contractLabels[value] || value || "";

export const formatDate = (value) =>
  value
    ? new Date(value).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

export const excerpt = (text = "", max = 120) =>
  text.length > max ? `${text.slice(0, max).trim()}…` : text;

export const splitTags = (value) =>
  (value || "")
    .split(/[,;\n]/)
    .map((tag) => tag.trim())
    .filter(Boolean);

export const sortByDateDesc = (items = [], key) =>
  [...items].sort((a, b) => new Date(b[key] || 0) - new Date(a[key] || 0));