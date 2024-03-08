import { FC } from "react";
import { ICarouselItem } from "./carousel.interface";
import CarouselNavigation from "./CarouselNavigation";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "../CSSTransitionGroup";

import styles from "./Carousel.module.scss";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
interface ICarousel {
  items: ICarouselItem[];
}

const Carousel: FC<ICarousel> = ({ items }) => {
  const { selectedItemIndex } = useTypedSelector((state) => state.carousel);
  const selectedItem = items[selectedItemIndex];

  return (
    <div className={styles.wrapper}>
      <TransitionGroup>
        <CarouselNavigation />
        <CSSTransition
          key={selectedItem.title}
          timeout={500}
          classNames={{
            enter: styles["item-enter"],
            enterActive: styles["item-enter-active"],
            exit: styles["item-exit"],
            exitActive: styles["item-exit-active"],
          }}
          unmountOnExit
          mountOnEnter
        >
          <div className={styles.item}>
            <section>
              <h4>{selectedItem.prefix}</h4>
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.description}</p>
              <Link to="/catalog">
                <button className={styles.goToCatalog}>Go to catalog!</button>
              </Link>
            </section>
            <aside>
              <img src={selectedItem.image} alt="" />
            </aside>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Carousel;
