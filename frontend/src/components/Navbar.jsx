import "../css/Navbar.css";
import clsx from "clsx";
import useLocalStorageState from "use-local-storage-state";
import { MdMenu, MdDarkMode, MdLightMode, MdLogin } from "react-icons/md";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useEffect, useState } from "react";
import { links } from "../data/links";

export default function Nav() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [theme, setTheme] = useLocalStorageState("theme", {
    defaultValue: window?.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  });
  const modalRef = useDetectClickOutside({
    onTriggered() {
      setIsMenuActive(false);
    },
  });
  const setThemeAttribute = (value) => {
    document.documentElement.setAttribute("data-theme", value);
  };
  const toggleTheme = () => {
    setTheme((oldTheme) => {
      const newTheme = oldTheme == "light" ? "dark" : "light";
      setThemeAttribute(newTheme);
      return newTheme;
    });
  };
  useEffect(() => {
    setThemeAttribute(theme);
  }, []);
  return (
    <nav ref={modalRef} className="navbar__navbar">
      <h1 className="navbar__logo">
        <a className="navbar__logo-link" href="/">
          WalletWatch
        </a>
      </h1>
      <div className="navbar__navside">
        <div className="navbar__navside-links">
          <div className="navbar__menu-container">
            <button
              onClick={() => setIsMenuActive((value) => !value)}
              title="Menu"
              className="navbar__menu"
            >
              <MdMenu className="navbar__icon" />
            </button>
          </div>
          <div
            className={clsx(
              "navbar__navlinks",
              isMenuActive && "navbar__menu-open"
            )}
          >
            {links.map(([url, text]) => (
              <a href={url} key={url} className="navbar__link">
                {text}
              </a>
            ))}
          </div>
        </div>
        <div className="navbar__navside-other">
          <a
            href="/login"
            className="navbar__link-button navbar__icon-button navbar__accent-button"
          >
            <MdLogin className="navbar__icon" />
            Login
          </a>
          <button
            className="navbar__theme-button"
            title="Toggle theme"
            onClick={toggleTheme}
          >
            {theme == "dark" ? (
              <MdLightMode className="navbar__icon" />
            ) : (
              <MdDarkMode className="navbar__icon" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
