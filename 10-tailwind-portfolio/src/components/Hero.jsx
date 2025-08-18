import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

import heroImg from "../assets/hero.svg";

function Hero() {
  // Returned JSX
  return (
    <section className="bg-emerald-100 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracing-wider mb-4">I'm John</h1>
          <p className="text-3xl text-slate-700 capitalize tracking-wide mb-2">
            Front-End Developer
          </p>
          <p className="text-lg text-slate-700 capitalize tracking-wide mb-4">
            Turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4">
            <a href="#">
              <FaGithubSquare className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaLinkedin className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="#">
              <FaTwitterSquare className="w-8 h-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
}

export default Hero;
