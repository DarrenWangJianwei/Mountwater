import React, { useEffect } from "react";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import styles from "../components/projects/css/projects.module.css";
import Particles from "../components/particles/Particles";
import Hero from "../components/hero/Hero";
export interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <Particles>
      <Hero>
        <div className={styles.container}>
          <div className={styles.gallery}>
            <ImagesGallery />;
          </div>
          <div className={styles.content}>
            <h1>Name</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </Hero>
    </Particles>
  );
};

export default Projects;

const ImagesGallery = () => {
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
