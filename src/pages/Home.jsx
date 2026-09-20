import Button from "../components/ui/Button";

export default function Home() {
  return (
    <section className="section">
      <div className="container" style={{ minHeight: "80vh" }}>
        <h1>Bienvenue chez DITS Group</h1>
        <p style={{ margin: "1rem 0 2rem" }}>Page d'accueil en construction.</p>
        <Button to="/contact">Nous contacter</Button>
      </div>
    </section>
  );
}