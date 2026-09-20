import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container empty">
        <h1>404</h1>
        <p style={{ margin: "1rem 0 2rem" }}>Cette page est introuvable.</p>
        <Button to="/">Retour à l'accueil</Button>
      </div>
    </section>
  );
}