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
            <h1>Capital City Centre East</h1>
            <p>
              The East side of Capital City Centre is a MLM Zoning: Mixed-Large
              Market.
            </p>
            <h3>Permitted uses include:</h3>
            <p>
              Shopping Centres, retail, food &amp; beverage, drive-through,
              restaurant, health care and education institution, professional
              office, animal support, personal and professional services, and
              assisted living dwellings.
            </p>
            <h3>Market Infomation:</h3>
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
              The East side of Capital City Centre features 180 parking stalls.
            </p>
            <p>
              The property is easily accessible by public transit with two bus
              stops immediatelyt adjacent to the Property, serving up to 4
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
    original: "/capital_square_centre/gallery/CapCity-12.jpg",
    thumbnail: "/capital_square_centre/gallery/CapCity-12.jpg",
  },
  {
    original: "/capital_square_centre/gallery/CapCity-13.jpg",
    thumbnail: "/capital_square_centre/gallery/CapCity-13.jpg",
  },
  {
    original: "/capital_square_centre/gallery/CapCity-1.jpg",
    thumbnail: "/capital_square_centre/gallery/CapCity-1.jpg",
  },
  {
    original: "/capital_square_centre/gallery/CapCity-2.jpg",
    thumbnail: "/capital_square_centre/gallery/CapCity-2.jpg",
  },
  {
    original: "/capital_square_centre/gallery/CapCity-3.jpg",
    thumbnail: "/capital_square_centre/gallery/CapCity-3.jpg",
  },
  {
    original: "/capital_square_centre/gallery/CapCity-4.jpg",
    thumbnail: "/capital_square_centre/gallery/CapCity-4.jpg",
  },
  {
    original: "/capital_square_centre/gallery/CapCity-7.jpg",
    thumbnail: "/capital_square_centre/gallery/CapCity-7.jpg",
  },
];
const ImagesGalleryLocal = () => {
  return images ? <ImageGallery items={images} /> : null;
};
