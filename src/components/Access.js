import React, { useEffect } from "react";
// redux
import { setContent } from "../slice/contentSlice";
import { useDispatch } from "react-redux";

export default function Access() {
  // redux
  const dispatch = useDispatch();
  // set content state
  useEffect(() => {
    dispatch(setContent("access"));
  }, []);

  return (
    <main>
      <section className="access">
        <h2 className="access__heading">アクセス・お問い合わせ</h2>
        <div className="access__map">
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
        <div className="inner-boundary">
          <div className="access__details">
            <dl className="access__details-container">
              <dt className="access__details-title">
                <span>所在地</span>
              </dt>
              <dd className="access__details-description">
                〒231-0013
                <br />
                神奈川県横浜市中区住吉町一丁目２番地スカーフ会館９階
              </dd>
            </dl>
            <dl className="access__details-container">
              <dt className="access__details-title access__details-title--transport">
                <span>駅から</span>
              </dt>
              <dd className="access__details-description">
                <ul className="access__details-description-list">
                  <li className="access__details-description-item">
                    ・JR「関内駅」南口　徒歩５分
                  </li>
                  <li className="access__details-description-item">
                    ・横浜市営地下鉄「関内駅」1番出口　徒歩５分
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          <div className="access__contact">
            <p className="access__contact-title">
              <span>お電話</span>
            </p>
            <p className="access__businessHour">
              営業時間　平日 9：00 &#xFF5E; 18：00
              <br />
              定休日　土曜・日曜・祝日・年末年始期間
            </p>
            <div className="access__contact-container">
              <div className="access__contact-column">
                <p className="access__contact-name">
                  <span>司法書士</span>
                  <br />
                  唐戸 小百合
                </p>
                <ul className="access__contact-nums">
                  <li className="access__contact-num">
                    <a href="tel:0456625002">TEL：045-662-5002</a>
                  </li>
                  <li className="access__contact-faxNum">FAX：045-641-1621</li>
                </ul>
              </div>
              <div className="access__contact-column">
                <p className="access__contact-name">
                  <span>司法書士</span>
                  <br />
                  原田 陽子・龍 英理
                </p>
                <ul className="access__contact-nums">
                  <li className="access__contact-num">
                    <a href="tel:0456517837">TEL：045-651-7837</a>
                  </li>
                  <li className="access__contact-faxNum">FAX：045-651-7838</li>
                </ul>
              </div>
            </div>
            <p className="access__note">
              ※それぞれ電話番号及びFAX番号がことなりますので、お電話の際はおかけ間違いないようお願いいたします。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
