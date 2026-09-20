import { useAuth } from "../context/authContext";

export default function Admin() {
  const { user } = useAuth();

  return (
    <section className="section">
      <div className="container">
        <h1>Administration</h1>
        <p style={{ marginTop: "1rem" }}>Administrateur : {user.email}</p>
      </div>
    </section>
  );
}