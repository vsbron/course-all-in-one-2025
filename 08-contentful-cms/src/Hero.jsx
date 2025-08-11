import heroImg from "./assets/hero.svg";

function Hero() {
  // Returned JSX
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Aesthetic neutra post-ironic, roof party selfies quinoa cred shaman
            glossier distillery affogato vexillologist bespoke. YOLO trust fund
            tbh waistcoat deep v freegan. Mlkshk slow-carb letterpress squid
            church-key. Pinterest ramps semiotics bitters. Selfies paleo banh mi
            meggings chillwave biodiesel.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
