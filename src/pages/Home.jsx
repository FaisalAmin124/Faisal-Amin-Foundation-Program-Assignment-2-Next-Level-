import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>

        <section className="hero">

          <div className="hero-content">

            <h1>
              Discover Amazing Movies
            </h1>

            <p>
              Explore and discover your favorite movies
              and TV shows from around the world.
            </p>

            <Link to="/movies" className="btn">
              Explore Movies
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;