import React, { useEffect } from "react";
import styles from "./MyRatings.module.css";
import { useNavigate } from "react-router-dom";

function MyRatings() {
    const navigate = useNavigate();
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.BackButton.show();
    tg.BackButton.onClick(() => navigate(-1));
    return () => {
      tg.BackButton.hide();
    };
  }, [navigate]);

  return (
    <div
      className="MyRatings"
      style={{
        width: "100%",
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <div
        className={styles.container}
        style={{
          width: "93%",
        }}
      >
        <div
          className={styles.main}
          style={{ marginTop: "16px", marginBottom: "25px" }}
        >
          <h1 className={styles.mainTitle}>Мои оценки </h1>

          <div className={styles.element}>
            <div className={styles.card}>
              <img src="/dog.png" alt="" className={styles.avatar} />
              <div className={styles.starCount}>
                <img src="/Star.png" alt="" className={styles.star} />
                <p>4,9</p>
              </div>
            </div>
            <div className={styles.desc}>
              {" "}
              <div className={styles.cardInfo}>
                <p className={styles.cardDesc}>Кобель на вязку</p>
                <p className={styles.cardName}>Вязка</p>
              </div>
              <img
                src="/stars.png"
                alt=""
                style={{ width: "155px", height: "24px" }}
              />
            </div>
          </div>
          <div className={styles.element}>
            <div className={styles.card}>
              <img src="/dog.png" alt="" className={styles.avatar} />
              <div className={styles.starCount}>
                <img src="/Star.png" alt="" className={styles.star} />
                <p>4,9</p>
              </div>
            </div>
            <div className={styles.desc}>
              {" "}
              <div className={styles.cardInfo}>
                <p className={styles.cardDesc}>Кобель на вязку</p>
                <p className={styles.cardName}>Вязка</p>
              </div>
              <img
                src="/stars.png"
                alt=""
                style={{ width: "155px", height: "24px" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              <img
                src="/home.png"
                alt=""
                className={styles.home}
                onClick={() => navigate("/main")}
              />

              <img
                src="/people.png"
                alt=""
                className={styles.people}
                onClick={() => navigate("/profile")}
              />
              <img
                src="/MessageNoColorWhite.png"
                alt=""
                className={styles.MessageNo}
              />
              <img
                src="/CounterNoColorWhite.png"
                alt=""
                className={styles.CounterNo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyRatings;
