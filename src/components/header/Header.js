import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import images from "./logo/maibe.PNG";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, RESET_AUTH } from "../../redux/features/auth/authSlice";
import ShowOnLogin, { ShowOnLogout } from "./hiddenLogin/hiddenLink";
import { UserName } from "../userName/userName";
export const logo = (

        <div className={styles.logo}>
          <Link to="/">
              <img src={images} alt="this is my page logo" />
            
          </Link>
        </div>
)

 const activeLink = ({isActive}) => (isActive ? `${styles.active}` : "")
      
      
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPage, setScrollpage] = useState(false);
  // Dispatch and navigate the user

  const dispatch = useDispatch();
  const navigate = useNavigate();
// Fixed Navbar

  const fixNavbar = () => {
    if (window.scrollY > 50) {
      setScrollpage(true)
    } else {
      setScrollpage(false)
    }
  };
    
  window.addEventListener("scroll", fixNavbar)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  };

  const hideMenu =() => {
    setShowMenu(false)
  }
  const logoutUser = async() => {
    await dispatch(logout());
    await dispatch(RESET_AUTH());
    navigate("/login")
  }
  const cart = (
    <span className={styles.cart}>
      <Link to={"/cart"}>
        Cart <i className="fa-solid fa-cart-shopping fa-beat-fade" style={{color: "orange"}}></i>
      <p>0</p>
      </Link>
    </span>
  )
    return (
        <header className={scrollPage ? `${styles.fixed}` : null}>
        <div className={styles.header}>
             {logo}
             <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>

            <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}` } onClick={hideMenu}>

            </div>
              <ul>
                <li className={styles["logo-mobile"]}>
                  {logo}
                  <i class="fa-solid fa-xmark" style={{fontSize: "2.5rem"}} onClick={hideMenu}></i>

                </li>
                <li>
                  <ShowOnLogin>
                     <NavLink to="/shop" className={activeLink}>
                    Shop
                    </NavLink>
                  </ShowOnLogin>
                 
                </li>
              </ul>

              <div className={styles["header-right"]}>
                <span className={styles.links}>
                <ShowOnLogin>
                     <NavLink to={"profile"} classsName={activeLink}>
                     <i className="fa-solid fa-user"></i>
                     <UserName/>
                  </NavLink>
                  </ShowOnLogin>
                  <ShowOnLogout>
                     <NavLink to={"login"} className={activeLink}>
                    Login
                  </NavLink>
                  </ShowOnLogout>
                 <ShowOnLogout>
                  <NavLink to={"register"} className={activeLink}>
                    Register
                  </NavLink>
                 </ShowOnLogout>

                  <ShowOnLogin>
                     <NavLink to={"order-history"} className={activeLink}>
                    Myorder
                  </NavLink>
                  </ShowOnLogin>
                  
                 <ShowOnLogin>
                   <NavLink to={"/"} onClick={logoutUser}>
                    Logout
                  </NavLink>
                 </ShowOnLogin>
                 
                </span>
                {cart}
              </div>
             </nav>
             <div className={styles["menu-icon"]} >
              {cart}
              <div className={styles.iconss}>
                <i className="fa-solid fa-bars-staggered fa-shake" size={28} style={{color: "white", fontSize: "2rem"}} onClick={toggleMenu}></i>
              </div>
              
             </div>
            </div>
    </header>
    )
}

export default Header