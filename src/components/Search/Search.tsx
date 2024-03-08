import React, { useState } from "react";
import styles from "./Search.module.scss";
import search from "../../assets/search.svg";
import searchb from "../../assets/searchblack.svg";
import close from "../../assets/close.svg";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { useAction } from "../../hooks/useActions";

export const Search: React.FC = () => {
  const [searchPopup, setSearchPopup] = useState(false);
  const { setQueryTerm, setPage } = useAction();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setQueryTerm(searchTerm);
    setPage(1);
  };
  return (
    <div className={styles.content}>
      <CSSTransition
        in={!searchPopup}
        timeout={400}
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <img
          className={styles.search}
          onClick={() => setSearchPopup(!searchPopup)}
          src={search}
          alt=""
        />
      </CSSTransition>
      <CSSTransition
        in={searchPopup}
        timeout={400}
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <div className={styles.body}>
          <input
            className={styles.searchInput}
            type="search"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            autocomplete="off"
          />

          <Link className={styles.link} to="/catalog">
            <button
              className={styles.buttonSearch}
              name="search"
              onClick={handleSearch}
            >
              <img className={styles.searchImgInput} src={searchb} alt="" />{" "}
            </button>
          </Link>

          <img
            onClick={() => setSearchPopup(!searchPopup)}
            className={styles.close}
            src={close}
            alt=""
          />
        </div>
      </CSSTransition>
    </div>
  );
};
