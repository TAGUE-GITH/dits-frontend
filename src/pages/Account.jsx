import { useAuth } from "../context/authContext";

export default function Account() {
  const { user } = useAuth();

  return (
    <section className="section">
      <div className="container">
        <h1>Mon espace</h1>
        <p style={{ marginTop: "1rem" }}>Connecté : {user.email}</p>
      </div>
    </section>
  );
}