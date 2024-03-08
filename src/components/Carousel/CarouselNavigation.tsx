import { FC } from "react";
import { useAction } from "../../hooks/useActions";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import styles from "./Carousel.module.scss";

const CarouselNavigation: FC = () => {
  const { nextSlide, prevSlide } = useAction();
  return (
    <div className={styles.nav}>
      <button onClick={() => prevSlide()} className={styles.left}>
        <GoChevronLeft />
      </button>
      <button
        onClick={() => nextSlide({ carouselLength: 2 })}
        className={styles.right}
      >
        <GoChevronRight />
      </button>
    </div>
  );
};

export default CarouselNavigation;
