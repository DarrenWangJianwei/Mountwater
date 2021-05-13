import React from "react";
import Particles from "../components/particles/Particles";
import Hero from "../components/hero/Hero";
import Card from "../components/animationCard/Card";
import Image from "../components/image/Image";
import cards from "./data.json";
import "./styles.css";

const About: React.FC = () => {
  return (
    <div className="main">
      <Particles>
        <Hero>
          <div className="container">
            <Info />
            <div className="row">
              {cards.map((card, i) => (
                <Card
                  path={card.path}
                  title={card.title}
                  description={card.description}
                  index={i}
                >
                  <Image
                    ratio={card.imageRatio}
                    src={card.image}
                    alt={card.alt}
                  />
                </Card>
              ))}
            </div>
          </div>
        </Hero>
      </Particles>
    </div>
  );
};

function Info() {
  return <div className="info">Projects</div>;
}

export default About;
