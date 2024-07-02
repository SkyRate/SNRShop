import React  from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";
import { Cart } from "../../pages/Cart/Cart";
import { Search } from "../Search/Search";
import { Navbar } from "../Navbar/Navbar";

export const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Link to="/">
          <img src={logo} alt="" className={styles.logo} />
        </Link>
        <Navbar />
        <div className={styles.position}>
          <div className={styles.row}>
            <Search />
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};
