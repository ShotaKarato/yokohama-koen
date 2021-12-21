import React, { useState, useEffect } from "react";
// react router
import { Link } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// images
import icon_menu from "../images/icon-menu.svg";
import icon_menu_following from "../images/icon-menu-following.svg";

export default function Header() {
  // states
  const [height, setHeight] = useState(0);
  const [isPC, setIsPC] = useState(false);
  const [visibility, setVisibility] = useState(false);

  // redux
  const content = useSelector((state) => state.content);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 900) {
      setIsPC(true);
    }
  }, []);

  // fix the header when scrolled
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    setHeight(scrollY);
  });

  return content === "" ? (
    <header className={height > 100 && isPC ? "header header-fixed" : "header"}>
      <div className="header__container">
        <h1
          className={
            height > 100 && !isPC ? "header__logo hide-logo" : "header__logo"
          }
        >
          よこはま公園
          <br />
          <span>司法書士事務所</span>
        </h1>
      </div>
      {/* header for PC */}
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-list-item">
            <Link to="/about" className="header__nav-list-item-link">
              事務所紹介
            </Link>
          </li>
          <li className="header__nav-list-item">
            <Link to="/service" className="header__nav-list-item-link">
              取り扱い業務
            </Link>
          </li>
          <li className="header__nav-list-item">
            <Link to="/access" className="header__nav-list-item-link">
              アクセス・お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
      {/* header for SP */}
      <div
        className={
          visibility ? "header__btn-sp-nav hide-btn" : "header__btn-sp-nav"
        }
        onClick={() => {
          setVisibility((prevVisibility) => !prevVisibility);
        }}
      >
        <img src={icon_menu} alt="メニューアイコン" width="25" height="22" />
        <p className="header__text-sp-nav">MENU</p>
      </div>
      <div
        className={visibility ? "header__nav-sp show-nav" : "header__nav-sp"}
      >
        <ul className="header__nav-sp-list">
          <li className="header__nav-sp-list-item">
            <Link
              to="/about"
              className="header__nav-sp-list-item-link"
              onClick={() => {
                setVisibility((prevVisibility) => !prevVisibility);
              }}
            >
              事務所紹介
            </Link>
          </li>
          <li className="header__nav-sp-list-item">
            <Link
              to="/service"
              className="header__nav-sp-list-item-link"
              onClick={() => {
                setVisibility((prevVisibility) => !prevVisibility);
              }}
            >
              取り扱い業務
            </Link>
          </li>
          <li className="header__nav-sp-list-item">
            <Link
              to="/access"
              className="header__nav-sp-list-item-link"
              onClick={() => {
                setVisibility((prevVisibility) => !prevVisibility);
              }}
            >
              アクセス・お問い合わせ
            </Link>
          </li>
        </ul>
        <span
          className="header__nav-sp-btn-close"
          onClick={() => {
            setVisibility((prevVisibility) => !prevVisibility);
          }}
        ></span>
      </div>
    </header>
  ) : (
    <header
      className={
        height > 100 && isPC
          ? "header-following header-fixed"
          : "header-following"
      }
    >
      <div className="inner-boundary">
        <div className="header-following__container">
          <h1 className="header-following__logo">
            <Link to="/" className="header-following__logo-link">
              よこはま公園
              <br />
              <span>司法書士事務所</span>
            </Link>
          </h1>
          {/* header for PC */}
          <nav className="header-following__nav">
            <ul className="header-following__nav-list">
              <li className="header-following__nav-list-item">
                <Link
                  to="/about"
                  className={
                    content === "about"
                      ? "header-following__nav-list-item-link header-following__nav-list-item-link--selected"
                      : "header-following__nav-list-item-link"
                  }
                >
                  事務所紹介
                </Link>
              </li>
              <li className="header-following__nav-list-item">
                <Link
                  to="/service"
                  className={
                    content === "service"
                      ? "header-following__nav-list-item-link header-following__nav-list-item-link--selected"
                      : "header-following__nav-list-item-link"
                  }
                >
                  取り扱い業務
                </Link>
              </li>
              <li className="header-following__nav-list-item">
                <Link
                  to="/access"
                  className={
                    content === "access"
                      ? "header-following__nav-list-item-link header-following__nav-list-item-link--selected"
                      : "header-following__nav-list-item-link"
                  }
                >
                  アクセス・お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
          {/* header for SP */}
          <div
            className={
              height > 100 && !isPC && visibility
                ? "header-following__btn-sp-nav fixed-btn hide-btn"
                : height > 100 && !isPC && !visibility
                ? "header-following__btn-sp-nav fixed-btn"
                : "header-following__btn-sp-nav"
            }
            onClick={() => {
              setVisibility((prevVisibility) => !prevVisibility);
            }}
          >
            <img
              src={icon_menu_following}
              alt="メニューアイコン"
              width="25"
              height="22"
            />
            <p className="header-following__text-sp-nav">MENU</p>
          </div>
          <div
            className={
              visibility
                ? "header-following__nav-sp show-nav"
                : "header-following__nav-sp"
            }
          >
            <ul className="header-following__nav-sp-list">
              <li className="header-following__nav-sp-list-item">
                <Link
                  to="/about"
                  className={
                    content === "about"
                      ? "header-following__nav-sp-list-item-link header-following__nav-sp-list-item-link--selected"
                      : "header-following__nav-sp-list-item-link"
                  }
                  onClick={() => {
                    setVisibility((prevVisibility) => !prevVisibility);
                  }}
                >
                  事務所紹介
                </Link>
              </li>
              <li className="header-following__nav-sp-list-item">
                <Link
                  to="/service"
                  className={
                    content === "service"
                      ? "header-following__nav-sp-list-item-link header-following__nav-sp-list-item-link--selected"
                      : "header-following__nav-sp-list-item-link"
                  }
                  onClick={() => {
                    setVisibility((prevVisibility) => !prevVisibility);
                  }}
                >
                  取り扱い業務
                </Link>
              </li>
              <li className="header-following__nav-sp-list-item">
                <Link
                  to="/access"
                  className={
                    content === "access"
                      ? "header-following__nav-sp-list-item-link header-following__nav-sp-list-item-link--selected"
                      : "header-following__nav-sp-list-item-link"
                  }
                  onClick={() => {
                    setVisibility((prevVisibility) => !prevVisibility);
                  }}
                >
                  アクセス・お問い合わせ
                </Link>
              </li>
            </ul>
            <span
              className="header-following__nav-sp-btn-close"
              onClick={() => {
                setVisibility((prevVisibility) => !prevVisibility);
              }}
            ></span>
          </div>
        </div>
      </div>
    </header>
  );
}
