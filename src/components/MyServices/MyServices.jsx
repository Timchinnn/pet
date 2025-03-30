import React from "react";
import styles from "./MyServices.module.css";
import { useNavigate } from "react-router-dom";

function MyServices() {
  const navigate = useNavigate();

  return (
    <div
      className="MyServices"
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
          <h1 className={styles.mainTitle}>Мои услуги</h1>
          <div className={styles.elementsContainer}>
            <div className={styles.elements}>
              <div className={styles.element}>
                <div className={styles.card}>
                  <img src="/dog.png" alt="" className={styles.avatar} />
                  <div className={styles.starCount}>
                    <img src="/Star.png" alt="" className={styles.star} />
                    <p>4,9</p>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardDesc}>Кобель на вязку</p>
                  <p className={styles.cardName}>Вязка</p>
                  <div className={styles.location}>
                    <img
                      src="/location-outline.png"
                      alt=""
                      className={styles.locationImg}
                    />
                    <p className={styles.city}>Екатеринбург</p>
                  </div>
                  <div className={styles.offer}>
                    <img src="/Share.png" alt="" className={styles.like} />
                    <img src="/Edit.png" alt="" className={styles.like} />
                    <img src="/Delete.png" alt="" className={styles.like} />
                  </div>
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
                <div className={styles.cardInfo}>
                  <p className={styles.cardDesc}>Кобель на вязку</p>
                  <p className={styles.cardName}>Вязка</p>
                  <div className={styles.location}>
                    <img
                      src="/location-outline.png"
                      alt=""
                      className={styles.locationImg}
                    />
                    <p className={styles.city}>Екатеринбург</p>
                  </div>
                  <div className={styles.offer}>
                    <img src="/Share.png" alt="" className={styles.like} />
                    <img src="/Edit.png" alt="" className={styles.like} />
                    <img src="/Delete.png" alt="" className={styles.like} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.add}>
              <img src="/Plus.png" alt="" className={styles.plus} />
              <p className={styles.addText}>Добавить</p>
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
export default MyServices;
