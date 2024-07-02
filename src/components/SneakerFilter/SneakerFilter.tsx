import { FC, useState } from "react";

import styles from "./SneakerFilter.module.scss";
import reset from "../../assets/reset.svg";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useActions";
import { brandItem } from "./sneakerFilter.data";
import { IPriceItem } from "./sneakerFilter.interface";
export const SneakerFilter: FC<IPriceItem> = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
}) => {
  const { setCategory, setPage, setQueryTerm, setOpenFilter } = useAction();
  const { category } = useTypedSelector((state) => state.filters);
  const { filterOpen } = useTypedSelector((state) => state.filters);
  const [pricePopup, setPricePopup] = useState(false);
  const [brandPopup, setBrandPopup] = useState(false);
  const handleCheckboxChange = (categoryNumber: number) => {
    category === categoryNumber ? setCategory(0) : setCategory(categoryNumber);
    setPage(1);
  };
  const handleResetFilters = () => {
    setQueryTerm("");
    setMinPrice("");
    setMaxPrice("");
    setCategory(0);
    setPage(1);
  };
  return (
    <div className={styles.filter}>
      <div
        onClick={() => setOpenFilter(!filterOpen)}
        className={styles.closeFilter}
      >
        CLOSE FILTERS
      </div>
      <div className={styles.reset} onClick={handleResetFilters}>
        <img src={reset} alt="" width={14} height={14} />
        <span> Reset filters</span>
      </div>
      <div className={styles.price}>
        <section onClick={() => setPricePopup(!pricePopup)}>
          <div className={styles.title}>Price, $</div>
        </section>
        <div
          className={`${styles.popup} ${pricePopup ? styles.popupActive : ""}`}
        >
          <section>
            <form>
              <input
                autoComplete="off"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                type="text"
                name="minPrice"
                placeholder="to"
              />
              <span>-</span>
              <input
                autoComplete="off"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                type="text"
                name="maxPrice"
                placeholder="do"
              />
            </form>
          </section>
        </div>
      </div>
      <div className={styles.category}>
        <section onClick={() => setBrandPopup(!brandPopup)}>
          <div className={styles.title}> Brand </div>
        </section>
        <div
          className={`${styles.popup} ${brandPopup ? styles.popupActive : ""}`}
        >
          <section>
            <div className={styles.brandInput}>
              <div className={styles.brandRow}>
                {brandItem.map((item) => (
                  <section>
                    <input
                      type="checkbox"
                      name={item.name}
                      checked={category === item.categoryNumber}
                      onChange={() => handleCheckboxChange(item.categoryNumber)}
                    />
                    <span> {item.name} </span>
                  </section>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
