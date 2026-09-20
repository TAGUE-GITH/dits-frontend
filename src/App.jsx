import Button from "./components/ui/Button";
import Field from "./components/ui/Field";
import SectionTitle from "./components/ui/SectionTitle";

export default function App() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          tag="DITS Group"
          title="Nos composants de base"
          text="Vérification du thème bleu marine et or."
        />
        <div className="grid">
          <div className="card card-hover">
            <span className="badge">Boutons</span>
            <h3 style={{ margin: "1rem 0" }}>Actions</h3>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              <Button>Principal</Button>
              <Button variant="dark">Sombre</Button>
              <Button variant="outline">Contour</Button>
            </div>
          </div>
          <div className="card card-hover">
            <span className="badge">Champs</span>
            <h3 style={{ margin: "1rem 0" }}>Formulaire</h3>
            <Field label="Email" id="email" type="email" placeholder="vous@exemple.com" />
          </div>
        </div>
      </div>
    </section>
  );
}