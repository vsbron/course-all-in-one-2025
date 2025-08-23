function About() {
  // Returned JSX
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolore
        autem! Ea quam, voluptatibus assumenda earum dolore aperiam, ex porro
        voluptate doloribus ipsa optio corporis voluptatem, animi omnis nulla
        reprehenderit! Minima corrupti quasi velit necessitatibus, illum
        repellendus consequuntur blanditiis consequatur!
      </p>
    </>
  );
}

export default About;
