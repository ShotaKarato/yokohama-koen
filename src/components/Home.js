import React, { useEffect } from "react";
// react router
import { Link } from "react-router-dom";
// redux
import { setContent } from "../slice/contentSlice";
import { useDispatch } from "react-redux";
// intersection observer
import { useInView } from "react-intersection-observer";
// images
import heading01 from "../images/heading01.png";
import icon_location from "../images/icon-location.svg";
import icon_phone from "../images/icon-phone.svg";

export default function Home({ onClick }) {
  // redux
  const dispatch = useDispatch();
  useEffect(() => {
    // set content in redux
    dispatch(setContent(""));
  });

  // intersection observers
  const [refAbout, inViewAbout] = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });
  const [refService, inViewService] = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });
  const [refAccess, inViewAccess] = useInView({
    rootMargin: "-100px",
    triggerOnce: true,
  });

  return (
    <main>
      <section className="section-top">
        <div className="inner-boundary">
          <h2 className="section-top__heading">
            <img
              src={heading01}
              alt="思い寄り添うよこはま公園司法書士事務所"
              width="643"
              height="146"
            />
          </h2>
        </div>
      </section>
      <section className="section-info">
        <div className="inner-boundary">
          <div className="section-info__container">
            <span className="section-info__time">2020.02.13</span>
            <h3 className="section-info__heading">
              <span className="section-info__heading-link" onClick={onClick}>
                ホームページリニューアルのお知らせ
              </span>
            </h3>
          </div>
        </div>
      </section>
      <section
        ref={refAbout}
        className={
          inViewAbout
            ? "section parallax parallax-up scroll-in"
            : "section parallax parallax-up"
        }
      >
        <div className="inner-boundary">
          <div className="section__container">
            <div className="section__box">
              <h3 className="section__heading">当事務所について</h3>
              <p className="section__description">
                よこはま公園司法書士事務所では、
                <br />
                初めてのお客さまでもお気軽にご相談いただける
                <br />
                ような雰囲気作りを心がけております
              </p>
              <div className="section__btnContainer">
                <Link to="/about" className="section__btn">
                  事務所紹介へ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={refService}
        className={
          inViewService
            ? "section section--service parallax parallax-up scroll-in"
            : "section section--service parallax parallax-up"
        }
      >
        <div className="inner-boundary">
          <div className="section__container section__container--service">
            <div className="section__box">
              <h3 className="section__heading">取り扱い業務について</h3>
              <p className="section__description">
                不動産登記に、相続手続、その他法律手続は
                <br />
                よこはま公園司法書士事務所にお任せください
              </p>
              <div className="section__btnContainer">
                <Link to="/service" className="section__btn">
                  取り扱い業務へ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        ref={refAccess}
        className={
          inViewAccess
            ? "section-access parallax parallax-up scroll-in"
            : "section-access parallax parallax-up"
        }
      >
        <div className="inner-boundary">
          <h3 className="section-access__heading">アクセス・お問い合わせ</h3>
          <div className="section-access__columns">
            <div className="section-access__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d812.5954646618668!2d139.6391227292736!3d35.44533969876562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185cf09bb0e201%3A0x772b652cf519862b!2z44CSMjMxLTAwMTMgS2FuYWdhd2EsIFlva29oYW1hLCBOYWthIFdhcmQsIFN1bWl5b3NoaWNoxY0sIDEtY2jFjW1l4oiSMiDplqLlhoXjgrnjgqvjg7zjg5XkvJrppKg!5e0!3m2!1sen!2sjp!4v1611383217867!5m2!1sen!2sjp"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="section-access__details">
              <dl className="section-access__location">
                <dt className="section-access__location-title">
                  <img
                    src={icon_location}
                    alt="所在地アイコン"
                    className="section-access__location-icon"
                  />
                  <span>所在地</span>
                </dt>
                <dd className="section-access__location-description">
                  〒231-0013
                  <br />
                  神奈川県横浜市中区住吉町一丁目２番地スカーフ会館９階
                </dd>
              </dl>
              <dl className="section-access__tel">
                <dt className="section-access__tel-title">
                  <img
                    src={icon_phone}
                    alt="電話アイコン"
                    className="section-access__tel-icon"
                  />
                  <span>お電話</span>
                </dt>
                <dd className="section-access__tel-description">
                  <div className="section-access__tel-line">
                    <p className="section-access__tel-line-name">
                      <span>司法書士</span>
                      <br />
                      唐戸 小百合
                    </p>
                    <ul className="section-access__tel-list">
                      <li className="section-access__tel-num">
                        <a href="tel:0456625002">TEL：045-662-5002</a>
                      </li>
                      <li className="section-access__tel-faxNum">
                        FAX：045-641-1621
                      </li>
                    </ul>
                  </div>
                  <div className="section-access__tel-line">
                    <p className="section-access__tel-line-name">
                      <span>司法書士</span>
                      <br />
                      原田 陽子・龍 英理
                    </p>
                    <ul className="section-access__tel-list">
                      <li className="section-access__tel-num">
                        <a href="tel:0456517837">TEL：045-651-7837</a>
                      </li>
                      <li className="section-access__tel-faxNum">
                        FAX：045-651-7838
                      </li>
                    </ul>
                  </div>
                </dd>
              </dl>
              <p className="section-access__note">
                ※それぞれ電話番号及びFAX番号がことなりますので、お電話の際はおかけ間違いないようお願いいたします。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
