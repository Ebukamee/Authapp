import Hero from "../assets/images/mobile-image-hero-1.jpg";
import One from "../assets/images/desktop-image-hero-1.jpg";
import Two from "../assets/images/desktop-image-hero-2.jpg";
import Three from "../assets/images/desktop-image-hero-1.jpg";
import Arrow from "../assets/images/icon-arrow.svg";
import About from "../assets/images/image-about-dark.jpg";
import Image from "../assets/images/image-about-light.jpg";
import "../assets/styles/Home.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Nav from "../componets/nav";

export default function Home() {
  const Pagination = ({
    totalPost,
    postPerPage,
    setCurrentPage,
    currentPage,
  }) => {
    let Imaged = [One, Two, Three];
    const Get = () => {
      const Total = 3;
    };
  };
  return (
    <>
      <Helmet>
        <title>Room | Homepage</title>
        <meta name="description" content="Home" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Nav />
      <div className="contain">
        <img src={Hero} alt="funiture" className="hero" />
        <div className="words">
          <div className="writings">
            <h1 className="not">Dicover Innovative ways to decorate</h1>
            <p>
              We provide unmatched quality,comfort and style for property owners
              acroos the country. Our expers combine form and functions in
              bringing your vision to life.
            </p>
            <Link to="/login" className="link">
              <h2 id="shop">
                Shop Now <img src={Arrow} />
              </h2>{" "}
            </Link>
          </div>

          <div className="about">
            <img src={About} alt="coffee_room" />
            <div className="about-words">
              <h1>About Our Funitures</h1>
              <p>
                Our multifunctional collections blends designs and function to
                suit yor individual taste. Make each room unique, or pick a
                cohesive theme that best express your intrests and what inspires
                you. Find the funiture pieces you need, from traditional to
                contemporary styles or anything inbetween. Product speacialists
                are available to help you get your dream space.
              </p>
            </div>
            <img src={Image} alt="white-chair-white-background" />
          </div>
        </div>
      </div>
      <div className="desktop">
        <img src={One} alt="funiture" className="desktop-hero" />
        <div className="discover">
          <h1 className="not">Dicover Innovative ways to decorate</h1>
          <p>
            We provide unmatched quality,comfort and style for property owners
            acroos the country. Our expers combine form and functions in
            bringing your vision to life.
          </p>
          <Link to="/login" className="link">
            <h2 id="shop">
              Shop Now <img src={Arrow} />
            </h2>{" "}
          </Link>
        </div>
        <div className="about-mobile">
          <div className="imge">
            <img src={About} alt="coffee_room" />
          </div>
          <div className="about-mobil">
            <h1>About Our Funitures</h1>
            <p>
              Our multifunctional collections blends designs and function to
              suit yor individual taste. Make each room unique, or pick a
              cohesive theme that best express your intrests and what inspires
              you. Find the funiture pieces you need, from traditional to
              contemporary styles or anything inbetween. Product speacialists
              are available to help you get your dream space.
            </p>
          </div>
          <div className="imge">
            <img src={Image} alt="white-chair-white-background" />
          </div>
        </div>
      </div>
    </>
  );
}
