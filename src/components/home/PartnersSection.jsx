import { getPartners } from "../../api/partnerApi";
import useFetch from "../../hooks/useFetch";
import SectionTitle from "../ui/SectionTitle";

export default function PartnersSection() {
  const { data, loading, error } = useFetch(getPartners);

  if (loading || error || !data?.length) return null;

  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          tag="Écosystème"
          title="Nos partenaires"
          text="Des acteurs de confiance avec qui nous construisons des solutions durables."
        />
        <div className="partners-grid">
          {data.map((partner) => {
            const logo = partner.logoUrl || partner.logo;
            const link = partner.websiteUrl || partner.website;

            return (
              <a
                key={partner.id}
                href={link || "#"}
                target="_blank"
                rel="noreferrer"
                className="partner"
                title={partner.name}
              >
                {logo ? <img src={logo} alt={partner.name} loading="lazy" /> : partner.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}