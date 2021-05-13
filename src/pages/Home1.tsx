import React from "react";
import styles1 from "../components/home/css/home1.module.css";
import Card from "../components/animationCard/Card";
import Image from "../components/image/Image";
import cards from "./data.json";

const Home1: React.FC<{}> = () => {
  return (
    <>
      <section className={styles1.hero_image}>
        <h1>
          About <span style={{ color: "rgb(172, 119, 119)" }}>Us</span>
        </h1>
      </section>
      <section className={styles1.hero_content}>
        <div className={styles1.hero_content_title}>
          Mountwater <br />
          Capital
        </div>
        <div className={styles1.hero_content_detail}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod proin
          pharetra ultrices aliquet at. Amet pharetra, ornare quam scelerisque
          neque sollicitudin neque, at arcu. Cursus velit ultricies phasellus
          leo, amet nullam sed eget etiam. In fusce sapien dui et malesuada
          vitae enim, viverra vel. Velit laoreet nec eros, neque senectus mi,
          convallis malesuada erat. Iaculis molestie rhoncus vel feugiat ac
          aliquam auctor. Odio ipsum, amet consectetur faucibus duis mauris mi
          nibh eget. Ornare diam eu molestie cursus. Purus, convallis eu diam in
          ac at venenatis tristique aenean.
        </div>
      </section>
      <section className={styles1.subContent}>
        <div className={styles1.subContent_title}>Why Choose Us?</div>
        <div className={styles1.subContent_details}>
          <div>
            <h1>Feature1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              proin pharetra ultrices aliquet at. Amet pharetra, ornare quam
              scelerisque neque sollicitudin neque, at arcu. Cursus velit
              ultricies phasellus leo, amet nullam sed eget etiam.
            </p>
          </div>
          <div>
            <h1>Feature2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              proin pharetra ultrices aliquet at. Amet pharetra, ornare quam
              scelerisque neque sollicitudin neque, at arcu. Cursus velit
              ultricies phasellus leo, amet nullam sed eget etiam.
            </p>
          </div>
          <div>
            <h1>Feature3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              proin pharetra ultrices aliquet at. Amet pharetra, ornare quam
              scelerisque neque sollicitudin neque, at arcu. Cursus velit
              ultricies phasellus leo, amet nullam sed eget etiam.
            </p>
          </div>
          <div>
            <h1>Feature4</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
              proin pharetra ultrices aliquet at. Amet pharetra, ornare quam
              scelerisque neque sollicitudin neque, at arcu. Cursus velit
              ultricies phasellus leo, amet nullam sed eget etiam.
            </p>
          </div>
        </div>
      </section>

      <section className={styles1.subContent_services}>
        <div className={styles1.subContent_services_nav}>
          <ul>
            <li>Retail &amp; Shopping Mall</li>
            <li>Appartment Building</li>
            <li>Real Estate Development</li>
          </ul>
        </div>
        <div className={styles1.subContent_services_container_content}>
          <div className={`${styles1.subContent_services_content}`}>
            <div className={`${styles1.retail}`}>
              Asset
              <br />
              Management
            </div>
          </div>
          <div className={`${styles1.subContent_services_content}`}>
            <div className={`${styles1.appartment}`}>
              Investment
              <br />
              Management
            </div>
          </div>
          <div className={`${styles1.subContent_services_content}`}>
            <div className={`${styles1.constructing}`}>
              Property
              <br />
              Management
            </div>
          </div>
        </div>
      </section>

      <section className={styles1.subContent_projects}>
        <div className="container">
          <div className={styles1.subContent_projects_title}>What We Did</div>
          <div className="row">
            {cards.map((card, i) => (
              <div className="column" key={i}>
                <Card
                  path={card.path}
                  key={i}
                  index={i}
                  title={card.title}
                  description={card.description}
                >
                  <Image
                    ratio={card.imageRatio}
                    src={card.image}
                    alt={card.alt}
                  />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home1;
