import React from "react";

export default function Header() {
  return (
    <header class="header-following">
      <div class="inner-boundary">
        <div class="header-following__container">
          <h1 class="header-following__logo">
            <a href="../index.html" class="header-following__logo-link">
              よこはま公園
              <br />
              <span>司法書士事務所</span>
            </a>
          </h1>
          <nav class="header-following__nav">
            <ul class="header-following__nav-list">
              <li class="header-following__nav-list-item">
                <a
                  href="../office/index.html"
                  class="header-following__nav-list-item-link"
                >
                  事務所紹介
                </a>
              </li>
              <li class="header-following__nav-list-item">
                <a
                  href="../service/index.html"
                  class="header-following__nav-list-item-link header-following__nav-list-item-link--selected"
                >
                  取り扱い業務
                </a>
              </li>
              <li class="header-following__nav-list-item">
                <a
                  href="../access/index.html"
                  class="header-following__nav-list-item-link"
                >
                  アクセス・お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
          <div class="header-following__btn-sp-nav">
            <img
              src="../img/icon-menu-following.svg"
              alt="メニューアイコン"
              width="25"
              height="22"
            />
            <p class="header-following__text-sp-nav">MENU</p>
          </div>
          <div class="header-following__nav-sp">
            <ul class="header-following__nav-sp-list">
              <li class="header-following__nav-sp-list-item">
                <a
                  href="../office/index.html"
                  class="header-following__nav-sp-list-item-link"
                >
                  事務所紹介
                </a>
              </li>
              <li class="header-following__nav-sp-list-item">
                <a
                  href="../service/"
                  class="header-following__nav-sp-list-item-link header-following__nav-sp-list-item-link--selected"
                >
                  取り扱い業務
                </a>
              </li>
              <li class="header-following__nav-sp-list-item">
                <a
                  href="../access/"
                  class="header-following__nav-sp-list-item-link"
                >
                  アクセス・お問い合わせ
                </a>
              </li>
            </ul>
            <span class="header-following__nav-sp-btn-close"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
