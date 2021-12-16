import React, { useEffect } from "react";
// redux
import { setContent } from "../slice/contentSlice";
import { useDispatch } from "react-redux";

export default function About() {
  // redux
  const dispatch = useDispatch();
  // set content state
  useEffect(() => {
    dispatch(setContent("about"));
  }, []);

  return (
    <main>
      <section className="section-following-top">
        <div className="section-following-top__heading">
          <div className="inner-boundary">
            <h2 className="section-following-top__heading-text">事務所紹介</h2>
          </div>
        </div>
        <div className="section-following-top__description section-following-top__description--office">
          <div className="inner-boundary">
            <p className="section-following-top__description-text">
              当よこはま公園司法書士事務所は、平成28年11月21日より原田司法書士事務所と旧ときわ司法書士事務所の合同司法書士事務所としてスタートいたしました。
            </p>
            <p className="section-following-top__description-text">
              よこはま公園司法書士事務所では、初めてのお客様でもお気軽にご相談いただけるような雰囲気作りを心がけております。
              <br />
              まずはお気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>
      <section className="section-following-content">
        <h3 className="section-following-content__heading section-following-content__heading--office">
          <span>司法書士紹介</span>
        </h3>
        <div className="office-members">
          <article className="office-members__item">
            <span className="office-members__photo">
              <img
                src="./img/karato.png"
                alt="司法書士 唐戸小百合（からと さゆり）の写真"
                width="192"
                height="192"
              />
            </span>
            <h4 className="office-members__name">
              <span className="office-members__name-title">司法書士</span>
              <br />
              唐戸 小百合
              <br />
              <span className="office-members__name-kana">
                （からと さゆり）
              </span>
            </h4>
            <div className="office-members__career">
              <p className="office-members__career-title">経歴</p>
              <ul className="office-members__career-list">
                <li className="office-members__career-list-item">
                  平成元年 司法書士試験合格
                </li>
                <li className="office-members__career-list-item">
                  平成2年11月 神奈川県司法書士会登録
                </li>
              </ul>
              <ul className="office-members__qualification-list">
                <li className="office-members__qualification-list-item">
                  登録番号 神奈川第679号
                </li>
                <li className="office-members__qualification-list-item">
                  簡裁訴訟代理認定番号 第102015号
                </li>
              </ul>
            </div>
          </article>
          <article className="office-members__item">
            <span className="office-members__photo">
              <img
                src="./img/harada.png"
                alt="司法書士 原田陽子（はらだ ようこ）の写真"
                width="192"
                height="192"
              />
            </span>
            <h4 className="office-members__name">
              <span className="office-members__name-title">司法書士</span>
              <br />
              原田陽子
              <br />
              <span className="office-members__name-kana">
                （はらだ ようこ）
              </span>
            </h4>
            <div className="office-members__career">
              <p className="office-members__career-title">経歴</p>
              <ul className="office-members__career-list">
                <li className="office-members__career-list-item">
                  平成5年 司法書士試験合格
                </li>
                <li className="office-members__career-list-item">
                  平成7年5月 神奈川県司法書士会登録
                </li>
              </ul>
              <ul className="office-members__qualification-list">
                <li className="office-members__qualification-list-item">
                  登録番号 神奈川第816号
                </li>
                <li className="office-members__qualification-list-item">
                  簡裁訴訟代理認定番号 第202011号
                </li>
              </ul>
            </div>
          </article>
          <article className="office-members__item">
            <span className="office-members__photo">
              <img
                src="./img/tatsu.png"
                alt="司法書士 龍 英理（たつ えり）の写真"
                width="192"
                height="192"
              />
            </span>
            <h4 className="office-members__name">
              <span className="office-members__name-title">司法書士</span>
              <br />龍 英理
              <br />
              <span className="office-members__name-kana">（たつ えり）</span>
            </h4>
            <div className="office-members__career">
              <p className="office-members__career-title">経歴</p>
              <ul className="office-members__career-list">
                <li className="office-members__career-list-item">
                  平成23年 司法書士試験合格
                </li>
                <li className="office-members__career-list-item">
                  平成25年7月 神奈川県司法書士会登録
                </li>
              </ul>
              <ul className="office-members__qualification-list">
                <li className="office-members__qualification-list-item">
                  登録番号　神奈川第1892号
                </li>
                <li className="office-members__qualification-list-item">
                  簡裁訴訟代理認定番号 第1201230号
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
