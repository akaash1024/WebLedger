export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, totam?</h1>
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>

              <div className="btn btn-group">
                <a href="/foodStorage">
                  <button className="btn">Get Food Now</button>
                </a>
                <a href="/">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
