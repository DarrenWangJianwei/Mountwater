import React, { useEffect } from "react";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import styles from "./css/projects.module.css";
import Particles from "../particles/Particles";
import Hero from "../hero/Hero";

export interface VictoriaSuareCentreProps {}

const CapitalCityCentre: React.FC<VictoriaSuareCentreProps> = () => {
  return (
    <Particles>
      <Hero>
        <div className={styles.container}>
          <div className={styles.gallery}>
            <ImagesGalleryLocal />;
          </div>
          <div className={styles.content}>
            <h1>Capital City Centre West</h1>
            <p>
              The West side of Capital City Centre is a MH Zoning: Mixed
              High-Rise
            </p>
            <p>
              Mixed High-Rise zoning is intended to provide for mixed-use
              development within a building or on a single lot, encouraging a
              variety of medium intensity commerical uses and a positive
              pedestrian experience.
            </p>
            <h3>Permitted uses include:</h3>
            <p>
              Retail, food &amp; beverage, personal service, animal support,
              professional office, assisted living, religous assembly,
              residential business.
            </p>
            <h3>Market Information:</h3>
            <p>
              Located at the intersection of Ring Road and Victoria Avenue East
              (Highway 1), the centre benefits from exceptional exposure along
              two major arterial thoroughfares. This property is shadow-anchored
              by a major home improvement store, which drives traffic to Capital
              City Centre. It is also adjacent to Victoria Square Shopping
              Centre with other major shopping centres in the close vicinity.
              These Shopping Centres form a dominant retail hub featuring a
              broad selection of brand-name retailers and dining options.
            </p>
            <p>
              As a result of the Major Centres near by, Capital City Centre
              benefits from exceptional retail synergy with a prime retail
              destination of Regina that sees over 56,600 vehicles per day.
            </p>
            <p>
              The West side of Capital City Centre features 181 parking stalls.
            </p>
            <p>
              The property is easily accessible by public transit with two bus
              stops immediately adjacent to the Property, serving up to 4
              individual bus routs.
            </p>
          </div>
        </div>
      </Hero>
    </Particles>
  );
};

export default CapitalCityCentre;

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
const images = [
  {
    original: "/capital_square_centre/gallery/CapCity-10.jpg",
    thumbnail: "/capital_square_centre/gallery/CapCity-10.jpg",
  },
  {
    original: "/capital_square_centre/gallery/CapCity-11.jpg",
    thumbnail: "/capital_square_centre/gallery/CapCity-11.jpg",
  },
  {
    original: "/capital_square_centre/gallery/CapCity-5.jpg",
    thumbnail: "/capital_square_centre/gallery/CapCity-5.jpg",
  },
  {
    original: "/capital_square_centre/gallery/CapCity-6.jpg",
    thumbnail: "/capital_square_centre/gallery/CapCity-6.jpg",
  },
];
const ImagesGalleryLocal = () => {
  return images ? <ImageGallery items={images} /> : null;
};
