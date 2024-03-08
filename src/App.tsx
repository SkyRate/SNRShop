import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Home } from "./pages/Home/Home";
import { Sneakers } from "./pages/Sneakers/Sneakers";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <>
      <Header />
      <div className={styles.globalWrapper}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/catalog" element={<Sneakers />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
