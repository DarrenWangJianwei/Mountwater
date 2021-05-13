import React, { useState, useRef, useEffect } from "react";
import loadIcons from "../../utils/icons_arrow";
import Card from "../../components/animationCard/Card";
import Image from "../../components/image/Image";
import stylesNew from "./cardList.module.css";

export interface CardListProps {
  cards: {
    title: string;
    description: string;
    image: string;
    alt: string;
    imageRatio: number;
    path: string;
  }[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  // Primary review.
  const [primary, setPrimary] = useState(0);
  // load indicator to load the arrow left and right icons.
  const [loaded, setLoaded] = useState(false);
  // automation of reviews bar.
  const reviewsRef = useRef<HTMLDivElement>(null);
  // const intervalId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    loadIcons(() => {
      setLoaded(true);
    });
  }, [loaded]);

  const handlePreviousReview = (): void => {
    if (primary === 0) {
      setPrimary(cards.length - 1);
    } else {
      setPrimary(primary - 1);
    }
  };

  const handleNextReview = (): void => {
    if (primary === cards.length - 1) {
      setPrimary(0);
    } else {
      setPrimary(primary + 1);
    }
  };

  const renderIconArrowLeft = (): JSX.Element | null => {
    if (loaded) {
      return (
        <button onClick={() => handlePreviousReview()} type="button">
          <span
            className={`iconify`}
            data-inline="false"
            data-icon="fa-solid:arrow-circle-left"
          />
        </button>
      );
    }
    return null;
  };

  const renderIconArrowRight = (): JSX.Element | null => {
    if (loaded) {
      return (
        <button onClick={() => handleNextReview()} type="button">
          <span
            className={`iconify`}
            data-inline="false"
            data-icon="fa-solid:arrow-circle-right"
          />
        </button>
      );
    }
    return null;
  };

  const renderReviewsAll = (
    cards: {
      title: string;
      description: string;
      image: string;
      alt: string;
      imageRatio: number;
      path: string;
    }[]
  ) =>
    cards.map((item, index) => {
      let number = primary - index;
      if (number < 0) {
        number += cards.length;
      }

      return (
        <Card
          path={item.path}
          index={number}
          key={index}
          title={item.title}
          description={item.description}
        >
          <Image ratio={item.imageRatio} src={item.image} alt={item.alt} />
        </Card>
      );
    });
  return (
    <main className={stylesNew.top_container} ref={reviewsRef}>
      {renderIconArrowLeft()}
      <ul className={stylesNew.reviews_container}>{renderReviewsAll(cards)}</ul>
      {renderIconArrowRight()}
    </main>
  );
};

export default CardList;
