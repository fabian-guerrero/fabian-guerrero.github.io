import { useState, useEffect } from "react";
import Button from "../Button/Button";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import LogoFgd from "../../images/svg/logo-fgd.svg?react";
import WorldIcon from "../../images/svg/world.svg?react";
import "./navbar.scss";
import "../../i18n";

import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation("common");
  const currentLang = i18n.language;

  const handleClick = () => {
    setMenuState((menuState) => !menuState);
  };

  useEffect(() => {
    let lastScrollTop;
    let navbar = document.getElementById("navbar");
    let windowSize = window.innerWidth;

    window.addEventListener("scroll", function () {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (windowSize >= 768) {
        if (scrollTop > lastScrollTop) {
          navbar.style.top = "-60px";
          navbar.classList.remove("top");
        } else if (scrollTop === 0) {
          navbar.classList.add("top");
          navbar.classList.remove("show-navbar");
        } else {
          navbar.style.top = "0";
          navbar.classList.add("show-navbar");
        }
      } else {
        if (scrollTop === 0) {
          navbar.classList.add("top");
          navbar.classList.remove("show-navbar");
        } else {
          navbar.classList.add("show-navbar");
        }
      }

      lastScrollTop = scrollTop;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  let toogleMenuState = menuState ? " open" : "";

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar" id="navbar">
        <div className="navbar-size">
          <div className="main-nav-wrapper">
            <div className="logo-wrappper">
              <a href="#hero" aria-label="Go to hero section">
                <LogoFgd className="main-logo" />
              </a>
            </div>
            <div className="toogle-theme-wrapper">
              <ThemeSwitcher mediaQuery="mobile" maskId="moon-mask-mobile" />
              <button
                onClick={handleClick}
                className={`mobile-menu-button${toogleMenuState}`}
                aria-label="Open the menu"
              >
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
                <i aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <ul className={`links-list${toogleMenuState}`}>
            <li className="link-item">
              <a className="section-link small-text" href="#experience">
                {t("experience")}
              </a>
            </li>
            <li className="link-item">
              <a className="section-link small-text" href="#work">
                {t("works")}
              </a>
            </li>
            <li className="link-item">
              <label htmlFor="language-select" className="sr-only">
                Select language
              </label>
              <WorldIcon className="language-selector-icon" />
              <select
                id="language-select"
                className="language-selector small-text"
                value={currentLang}
                onChange={handleChange}
                aria-label="Select language"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </li>
            <li className="link-item">
              <ThemeSwitcher mediaQuery="desktop" maskId="moon-mask" />
            </li>
            <li className="link-item">
              <a
                id="downloadLink"
                href="../../images/FabianGuerreroResume.pdf"
                download
              >
                <Button variant="filled"> {t("downloadCv")}</Button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
