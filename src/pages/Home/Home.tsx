import React from "react";

import styles from "./Home.module.scss";

import Carousel from "../../components/Carousel/Carousel";
import { carouselItems } from "../../components/Carousel/carousel.data";

export const Home: React.FC = () => {
  return (
    <div className={styles.content}>
      <Carousel items={carouselItems} />
    </div>
  );
};
