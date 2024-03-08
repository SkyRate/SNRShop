import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { NavbarItem } from "./navbar.data";
import { TbMenuDeep } from "react-icons/tb";

export const Navbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className={`${styles.nav} ${isOpen ? styles.navActive : ""}`}>
        <section>
          {NavbarItem.map((item, id) => (
            <Link className={styles.link} key={id} to={item.link}>
              <span>{item.title}</span>
            </Link>
          ))}
        </section>
      </div>
      <div className={styles.button} onClick={() => setOpen(!isOpen)}>
        <TbMenuDeep />
      </div>
    </div>
  );
};
