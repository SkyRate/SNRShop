import { FC, useState } from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { informationItem } from "./footer.data";
import vk from "../../assets/vk.svg";
import telega from "../../assets/telega.svg";
const Footer: FC = () => {
  const [sectionsOpen, setSectionsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.body}>
          <div className={styles.sections}>
            <div
              className={styles.title}
              onClick={() => setSectionsOpen(!sectionsOpen)}
            >
              SECTIONS
            </div>
            <div
              className={`${styles.popup} ${
                sectionsOpen ? styles.popupActive : ""
              }`}
            >
              <section>
                <Link className={styles.sectionLink} to="/catalog">
                  <p>Shoes</p>
                </Link>
                <p>Cloth</p>
              </section>
            </div>
          </div>
          <div className={styles.info}>
            <div
              className={styles.title}
              onClick={() => setInfoOpen(!infoOpen)}
            >
              INFORMATION
            </div>
            <div
              className={`${styles.popup} ${
                infoOpen ? styles.popupActive : ""
              }`}
            >
              <section>
                {informationItem.map((item, id) => (
                  <Link
                    to={item.link}
                    key={id}
                    className={styles.informationLink}
                  >
                    <span>{item.title}</span>
                  </Link>
                ))}
              </section>
            </div>
          </div>
          <div className={styles.contact}>
            <div
              className={styles.title}
              onClick={() => setContactOpen(!contactOpen)}
            >
              CONTACT
            </div>
            <div
              className={`${styles.popup} ${
                contactOpen ? styles.popupActive : ""
              }`}
            >
              <section>
                <div className={styles.informationContact}>
                  <p>7(777)777-77-77</p>
                  <p>Opening hours (from 09:00 To 20:00)</p>
                  <p>SUPPORT@SUPPORT.COM</p>
                </div>
              </section>
            </div>
          </div>
          <div className={styles.social}>
            <a href="https://vk.com/" target="_blank">
              <img src={vk} alt="" />
            </a>

            <a href="https://web.telegram.org/a/" target="_blank">
              <img src={telega} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.from}> 2023-2024 Ⓒ SNR</div>
      </div>
    </div>
  );
};

export default Footer;
