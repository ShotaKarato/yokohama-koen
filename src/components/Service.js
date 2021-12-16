import React, { useEffect } from "react";
// redux
import { setContent } from "../slice/contentSlice";
import { useDispatch } from "react-redux";

export default function Service() {
  // redux
  const dispatch = useDispatch();
  // set content state
  useEffect(() => {
    dispatch(setContent("service"));
  }, []);

  return (
    <main>
      <section className="section-following-top">
        <div className="section-following-top__heading section-following-top__heading--service">
          <div className="inner-boundary">
            <h2 className="section-following-top__heading-text">
              取り扱い業務
            </h2>
          </div>
        </div>
        <div className="section-following-top__description">
          <div className="inner-boundary">
            <p className="section-following-top__description-text">
              当事務所では不動産登記や商業登記、また相続手続きなどさまざまな法律関係手続きをお受けしております。
              <br />
              まずはお気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>
      <section className="section-following-content">
        <div className="inner-boundary">
          <h3 className="section-following-content__heading">
            <span>各種取り扱い業務</span>
          </h3>
          <div className="service">
            <article className="service__box">
              <h4 className="service__item-title">不動産登記</h4>
              <div className="service__item-description">
                <img
                  src="./img/service-housing.jpg"
                  alt="不動産登記イメージの画像"
                  className="service__image"
                  width="437"
                  height="290"
                />
                <div className="service__column-details">
                  <p className="service__details-text">
                    不動産登記とはお客様の大切な財産である土地・建物に対して、所在・面積の他、所有者の住所・氏名等を公の登記簿に記載して、その権利をお守りすることです。
                  </p>
                  <div className="service__details-example">
                    <p className="service__details-example-text">
                      具体的なお手続き
                    </p>
                    <ul className="service__details-example-list">
                      <li className="service__details-example-item">
                        <span>・</span>
                        売買、贈与、財産分与、相続などによる所有権移転登記
                      </li>
                      <li className="service__details-example-item">
                        <span>・</span>抵当権、根抵当権などの担保設定登記
                      </li>
                      <li className="service__details-example-item">
                        <span>・</span>抵当権、根抵当権などの担保抹消登記
                      </li>
                      <li className="service__details-example-item">
                        <span>・</span>
                        住所移転、結婚、離婚などによる住所・氏名変更登記
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
            <article className="service__box">
              <h4 className="service__item-title">商業・法人登記</h4>
              <div className="service__item-description">
                <img
                  src="./img/service-commerce.jpg"
                  alt="商業・法人登記イメージの画像"
                  className="service__image"
                  width="437"
                  height="290"
                />
                <div className="service__column-details">
                  <p className="service__details-text">
                    不動産登記とはお客様の大切な財産である土地・建物に対して、所在・面積の他、所有者の住所・氏名等を公の登記簿に記載して、その権利をお守りすることです。
                  </p>
                  <div className="service__details-example">
                    <p className="service__details-example-text">
                      具体的なお手続き
                    </p>
                    <ul className="service__details-example-list">
                      <li className="service__details-example-item">
                        <span>・</span>
                        売買、贈与、財産分与、相続などによる所有権移転登記
                      </li>
                      <li className="service__details-example-item">
                        <span>・</span>抵当権、根抵当権などの担保設定登記
                      </li>
                      <li className="service__details-example-item">
                        <span>・</span>抵当権、根抵当権などの担保抹消登記
                      </li>
                      <li className="service__details-example-item">
                        <span>・</span>
                        住所移転、結婚、離婚などによる住所・氏名変更登記
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
            <article className="service__box">
              <h4 className="service__item-title">遺産承継手続</h4>
              <div className="service__item-description">
                <img
                  src="./img/service-inheritance.jpg"
                  alt="遺産承継手続イメージの画像"
                  className="service__image"
                  width="437"
                  height="290"
                />
                <div className="service__column-details">
                  <p className="service__details-text">
                    不動産登記とはお客様の大切な財産である土地・建物に対して、所在・面積の他、所有者の住所・氏名等を公の登記簿に記載して、その権利をお守りすることです。
                  </p>
                  <div className="service__details-example">
                    <p className="service__details-example-text">
                      具体的なお手続き
                    </p>
                    <ul className="service__details-example-list">
                      <li className="service__details-example-item">
                        <span>・</span>
                        売買、贈与、財産分与、相続などによる所有権移転登記
                      </li>
                      <li className="service__details-example-item">
                        <span>・</span>抵当権、根抵当権などの担保設定登記
                      </li>
                      <li className="service__details-example-item">
                        <span>・</span>抵当権、根抵当権などの担保抹消登記
                      </li>
                      <li className="service__details-example-item">
                        <span>・</span>
                        住所移転、結婚、離婚などによる住所・氏名変更登記
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
            <div className="service__box-others">
              <h4 className="service__others-title">その他取り扱い業務</h4>
              <p className="service__others-description">
                成年後見・債務整理・自己破産・裁判業務・供託手続の代理・相談業務等
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
