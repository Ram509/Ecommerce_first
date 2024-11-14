import { Link } from "react-router-dom";
import styles from "./Lay/Pagenav.module.css";
import Profile from "../Assets/Logo/profile.png";
import Shopping from "../Assets/Logo/shopping.png"; // Corrected variable name

function PageNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLogo}>
        <p>ECOMMERCE</p>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/womens">Womens</Link>
        </li>
        <li>
          <Link to="/mens">Mens</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
        <li>
          <Link to="/footwear">Footwear</Link>
        </li>
        <li>
          <Link to="/bags">Bags</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <img className={styles.shopping} src={Shopping} alt="shopping" />
        </li>
        <li>
          <img className={styles.profile} src={Profile} alt="profile" />
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
