import React, { useEffect } from "react";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import styles from "./css/projects.module.css";
import Particles from "../../components/particles/Particles";
import Hero from "../../components/hero/Hero";

export interface VictoriaSuareCentreProps {}

const images = [
  {
    original: "/victoria_square/gallery/VicSquare-1.jpg",
    thumbnail: "/victoria_square/gallery/VicSquare-1.jpg",
  },
  {
    original: "/victoria_square/gallery/VicSquare-2.jpg",
    thumbnail: "/victoria_square/gallery/VicSquare-2.jpg",
  },
  {
    original: "/victoria_square/gallery/VicSquare-3.jpg",
    thumbnail: "/victoria_square/gallery/VicSquare-3.jpg",
  },
  {
    original: "/victoria_square/gallery/VicSquare-4.jpg",
    thumbnail: "/victoria_square/gallery/VicSquare-4.jpg",
  },
  {
    original: "/victoria_square/gallery/VicSquare-5.jpg",
    thumbnail: "/victoria_square/gallery/VicSquare-5.jpg",
  },
  {
    original: "/victoria_square/gallery/VicSquare-6.jpg",
    thumbnail: "/victoria_square/gallery/VicSquare-6.jpg",
  },
  {
    original: "/victoria_square/gallery/VicSquare-7.jpg",
    thumbnail: "/victoria_square/gallery/VicSquare-7.jpg",
  },
  {
    original: "/victoria_square/gallery/VicSquare-8.jpg",
    thumbnail: "/victoria_square/gallery/VicSquare-8.jpg",
  },
  {
    original: "/victoria_square/gallery/VicSquare-9.jpg",
    thumbnail: "/victoria_square/gallery/VicSquare-9.jpg",
  },
  {
    original: "/victoria_square/gallery/VicSquare-10.jpg",
    thumbnail: "/victoria_square/gallery/VicSquare-10.jpg",
  },
];

const VictoriaSuareCentre: React.FC<VictoriaSuareCentreProps> = () => {
  return (
    <Particles>
      <Hero>
        <div className={styles.container}>
          <div className={styles.gallery}>
            <ImagesGalleryLocal />
          </div>
          <div className={styles.content}>
            <h1>Victoria Square Centre</h1>
            <p>
              Victoria Square is a 283,952 square foot grocery­anchored shopping
              centre, consisting of 49 tenants spanning a 25 acre site. The site
              is comprised of the main enclosed mall as well as three
              single-storey retail pad buildings.
            </p>
            <p>
              The property is 86% leased to a premier mix of national and
              regional tenants, including Safeway, Shoppers Drug Mart, and
              Dollar Tree, which provide essential service grocery and drug
              retail offerings. The remaining tenants provide shoppers with
              other complementary uses including casual dining, health and
              medical, financial services, electronics, food services, and more.
              Combined with a weighted average lease to expiry (WALE) of 3.94
              years, the property offers investors a strong tenant profile and
              income stability.
            </p>
            <h3>Location</h3>
            <p>
              The property is surrounded by several major retail centres
              including Capital City Centre, Victoria Common and Victoria Gate.
              Together, these shopping centres form a dominant retail hub
              featuring a broad selection of brand-name retailers such as
              Sobeys, Costco and London Drugs, as well as various dining options
              including Earls and Craving's. As a result, Victoria Square
              benefits from exceptional retail synergy in a prime retail
              destination of Regina.
            </p>
            <p>
              Situated along the Trans-Canada Highway, the property has exposure
              to approximately 56,600 vehicles per day, and serves a favorable
              demographic, with average household income of $124,616 within the
              adjacent neighborhoods.
            </p>
          </div>
        </div>
      </Hero>
    </Particles>
  );
};

export default VictoriaSuareCentre;

const ImagesGalleryRemote = () => {
  const [images, setImages] = React.useState<ReactImageGalleryItem[]>();
  const shouldCancel = React.useRef(false);

  useEffect(() => {
    const call = async () => {
      const response = await axios.get(
        "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
      );
      if (!shouldCancel.current && response.data && response.data.length > 0) {
        setImages(
          response.data.map((url: any) => ({
            original: `${url}=w1024`,
            thumbnail: `${url}=w100`,
          }))
        );
      }
    };
    call();
    return () => {
      shouldCancel.current = false;
    };
  }, []);

  return images ? <ImageGallery items={images} /> : null;
};

const ImagesGalleryLocal = () => {
  return images ? <ImageGallery items={images} /> : null;
};
