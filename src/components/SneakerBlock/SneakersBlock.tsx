import React from "react";
import styles from "./SneakerBlock.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useActions";
import { ICartItems } from "../../redux/Cart/cart.interface";

export const SneakersBlock: React.FC<ICartItems> = ({
  id,
  image,
  title,
  price,
}) => {
  const { addItem, removeItem } = useAction();
  const { items } = useTypedSelector((state) => state.cart);
  const isExists = items.some((r) => r.id === id);
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      image,
    };
    addItem(item);
  };
  const onCLickRemoveItem = () => {
    removeItem(id);
  };

  return (
    <div className={styles.body}>
      <div className={styles.imageContainer}>
        <img src={image} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <p> $ {price}</p>
        {isExists ? (
          <span className={styles.addToCart} onClick={onCLickRemoveItem}>
            Remove to cart
          </span>
        ) : (
          <span className={styles.addToCart} onClick={onClickAdd}>
            Add to cart
          </span>
        )}
      </div>
    </div>
  );
};
