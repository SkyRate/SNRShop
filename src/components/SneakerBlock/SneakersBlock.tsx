import React from "react";
import styles from "./SneakerBlock.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useActions";
import { CartItem } from "../../redux/Cart/cart.interface";

export const SneakersBlock: React.FC<CartItem> = ({
  id,
  image,
  title,
  price,
}) => {
  const { addItem, removeItem } = useAction();
  const { items } = useTypedSelector((state) => state.cart);
  const isExists = items.some((r: CartItem) => r.id === id);
  const onClickAdd = () => {
    const item: any = {
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
