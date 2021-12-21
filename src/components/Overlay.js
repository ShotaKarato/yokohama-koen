import React from "react";

export default function Overlay({ visibility, onClick }) {
  return (
    <div className={visibility ? "overlay show-overlay" : "overlay"}>
      <div className="overlay__bg">
        <dl className="overlay__content">
          <dt className="overlay__heading">
            ホームページリニューアルのお知らせ
          </dt>
          <dd className="overlay__date">2021.02.13</dd>
          <dd className="overlay__description">
            この度、よこはま公園司法書士事務所のホームページが新しく生まれ変わりました。
            <br />
            これからもみなさまにご満足いただけるよう一層のサービス向上を目指をし努力してまいります。
          </dd>
        </dl>
        <span className="overlay__btn-close" onClick={onClick}></span>
      </div>
    </div>
  );
}
