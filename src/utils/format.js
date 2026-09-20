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