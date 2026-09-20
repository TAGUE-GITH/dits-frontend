import { getServices } from "../api/serviceApi";
import useFetch from "../hooks/useFetch";
import PageHeader from "../components/ui/PageHeader";
import DataState from "../components/ui/DataState";
import ServiceCard from "../components/cards/ServiceCard";
import CtaSection from "../components/home/CtaSection";

export default function Services() {
  const { data, loading, error } = useFetch(getServices);

  return (
    <>
      <PageHeader
        title="Nos services"
        text="Des prestations complètes et sur mesure pour accompagner chacune de vos étapes."
      />
      <section className="section">
        <div className="container">
          <DataState loading={loading} error={error} empty={!data?.length}>
            <div className="grid">
              {data?.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </DataState>
        </div>
      </section>
      <CtaSection />
    </>
  );
}