import styles from "./css/Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbrand}>
        <Link to="/">
          <img
            src={"/noodles.png"}
            alt="CulinaryQuest_Logo"
            className={styles.navbarlogo}
          />
        </Link>

        <div className={styles.brandname}>
          {" "}
          <span>C</span>ULINARY <span>Q</span>UEST{" "}
        </div>
      </div>
      <ul className={styles.navlist}>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/About">ABOUT</Link>
        </li>
        <li>
          <Link to="/recipe">RECIPE</Link>
        </li>
        <li>
          <Link to="/search">SEARCH</Link>
        </li>
      </ul>
    </nav>
  );
}
