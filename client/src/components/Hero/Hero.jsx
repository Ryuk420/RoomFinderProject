import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Finding <br />
              Most Suitable
              <br /> Homes
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>International Student looking for accomodation?</span>
            <span>Forget all difficulties in finding a home for you</span>
          </div>

          <SearchBar/>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={800} end={1100} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Student Homes</span>
            </div>

            <div className="flexColCenter stat">
              <span> 
                <CountUp start={300} end={420} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Students</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={11} /> <span>+</span>
              </span>
              <span className="secondaryText">Got Married</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
