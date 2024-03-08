import { FC } from "react";
import styles from "./CartItem.module.scss";
import { GoTrash } from "react-icons/go";
import { useAction } from "../../hooks/useActions";
import { ICartItems } from "../../redux/Cart/cart.interface";

export const CartProduct: FC<ICartItems> = ({
  title,
  image,
  price,
  id,
  count,
}) => {
  const { removeItem, addItem, minusItem } = useAction();

  const onCLickRemoveItem = () => {
    removeItem(id);
  };
  const onClickaAddItem = () => {
    addItem({ id });
  };
  const onClickMinusItem = () => {
    minusItem(id);
  };

  return (
    <div className={styles.body}>
      <img src={image} alt="" />
      <div className={styles.grid}>
        <div className={styles.title}>{title}</div>
        <div className={styles.price}>$ {price}</div>
        <div className={styles.count}>
          <button
            className={styles.countMinus}
            disabled={count === 1}
            onClick={onClickMinusItem}
          ></button>
          <span className={styles.totalCount}>{count}</span>
          <button
            className={styles.countPlus}
            onClick={onClickaAddItem}
          ></button>
        </div>
        <div className={styles.deleteItem} onClick={onCLickRemoveItem}>
          <GoTrash />
        </div>
        <img />
      </div>
    </div>
  );
};
