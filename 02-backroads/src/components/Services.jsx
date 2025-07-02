import { services } from "../lib/data";
import Title from "./ui/Title";

function Services() {
  // Returned JSX
  return (
    <section className="section services" id="services">
      <Title title="Our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((service) => (
          <article className="service">
            <span className="service-icon">
              <i className={service.icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-text">{service.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
