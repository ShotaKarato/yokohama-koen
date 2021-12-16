import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="inner-boundary">
          <div className="footer__top-container">
            <dl className="footer__office">
              <dt className="footer__office-name">
                よこはま公園司法書士事務所
              </dt>
              <dd className="footer__office-location">
                〒231-0013
                <br />
                神奈川県横浜市中区住吉町一丁目２番地スカーフ会館９階
              </dd>
            </dl>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-list-item">
                  <a
                    href="./office/index.html"
                    className="footer__nav-list-item-link"
                  >
                    事務所紹介
                  </a>
                </li>
                <li className="footer__nav-list-item">
                  <a
                    href="./service/index.html"
                    className="footer__nav-list-item-link"
                  >
                    取り扱い業務
                  </a>
                </li>
                <li className="footer__nav-list-item">
                  <a
                    href="./access/index.html"
                    className="footer__nav-list-item-link"
                  >
                    アクセス・お問い合わせ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="inner-boundary">
          <p className="footer__copyright">
            Copyright<span>&#169;</span> 2016 よこはま公園司法書士事務所 All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
