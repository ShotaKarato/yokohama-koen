import React from "react";
// react router
import { Link } from "react-router-dom";
// redux
import { useSelector } from "react-redux";

export default function Header() {
  // redux
  const content = useSelector((state) => state.content);
  return content === "" ? (
    <header className="header">
      <div className="header__container">
        <h1 className="header__logo">
          よこはま公園
          <br />
          <span>司法書士事務所</span>
        </h1>
      </div>
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
      <div className="header__btn-sp-nav">
        <img
          src="./img/icon-menu.svg"
          alt="メニューアイコン"
          width="25"
          height="22"
        />
        <p className="header__text-sp-nav">MENU</p>
      </div>
      <div className="header__nav-sp">
        <ul className="header__nav-sp-list">
          <li className="header__nav-sp-list-item">
            <Link to="/about" className="header__nav-sp-list-item-link">
              事務所紹介
            </Link>
          </li>
          <li className="header__nav-sp-list-item">
            <Link to="/service" className="header__nav-sp-list-item-link">
              取り扱い業務
            </Link>
          </li>
          <li className="header__nav-sp-list-item">
            <Link to="/access" className="header__nav-sp-list-item-link">
              アクセス・お問い合わせ
            </Link>
          </li>
        </ul>
        <span className="header__nav-sp-btn-close"></span>
      </div>
    </header>
  ) : (
    <header className="header-following">
      <div className="inner-boundary">
        <div className="header-following__container">
          <h1 className="header-following__logo">
            <Link to="/" className="header-following__logo-link">
              よこはま公園
              <br />
              <span>司法書士事務所</span>
            </Link>
          </h1>
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
          <div className="header-following__btn-sp-nav">
            <img
              src="../img/icon-menu-following.svg"
              alt="メニューアイコン"
              width="25"
              height="22"
            />
            <p className="header-following__text-sp-nav">MENU</p>
          </div>
          <div className="header-following__nav-sp">
            <ul className="header-following__nav-sp-list">
              <li className="header-following__nav-sp-list-item">
                <Link
                  to="/about"
                  className={
                    content === "about"
                      ? "header-following__nav-sp-list-item-link header-following__nav-sp-list-item-link--selected"
                      : "header-following__nav-sp-list-item-link"
                  }
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
                >
                  アクセス・お問い合わせ
                </Link>
              </li>
            </ul>
            <span className="header-following__nav-sp-btn-close"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
