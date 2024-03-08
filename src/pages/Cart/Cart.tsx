import React, { useState } from "react";
import { CartProduct } from "../../components/CartItem/CartProduct";
import cart from "../../assets/basket.svg";
import styles from "./Cart.module.scss";
import { CSSTransition } from "react-transition-group";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IoMdClose } from "react-icons/io";

export const Cart: React.FC = () => {
  const { items, totalPrice } = useTypedSelector((state) => state.cart);
  const [cartOpen, setCartOpen] = useState(false);
  console.log(cartOpen);

  return (
    <div>
      <div className={styles.position}>
        <img onClick={() => setCartOpen(!cartOpen)} src={cart} alt="" />
        <span className={styles.badge}>{items.length}</span>

        <CSSTransition
          in={cartOpen}
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
          <div className={styles.cart}>
            <div
              className={styles.buttonOff}
              onClick={() => setCartOpen(!cartOpen)}
            >
              <IoMdClose />
            </div>
            <div className={styles.cartBody}>
              <span>BASKET</span>
              <div className={styles.product}>
                {items.length ? (
                  items.map((item) => <CartProduct key={item.id} {...item} />)
                ) : (
                  <div className={styles.empty}>Cart is empty!</div>
                )}
              </div>
              <div className={styles.footerblock}>
                <div className={styles.totalPrice}>
                  <span>TOTAL:</span>
                  <p>${totalPrice}.00</p>
                </div>

                <button>Checkout</button>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};
