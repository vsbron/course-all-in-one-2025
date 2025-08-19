import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

function About() {
  // Returned JSX
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="Code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eius
            iste error laudantium provident exercitationem amet, nam aliquid
            illo voluptatibus fuga distinctio sunt recusandae cum aspernatur
            mollitia odio sapiente delectus.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;
