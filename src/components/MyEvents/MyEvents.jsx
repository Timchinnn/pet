import React, { useEffect } from "react";
import styles from "./MyEvents.module.css";
import { useNavigate } from "react-router-dom";

function MyEvents() {
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
      className="MyEvents"
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
          <h1 className={styles.mainTitle}>Мои мероприятия</h1>
          <h2 className={styles.title}>Одобрены</h2>
          <div className={styles.label} style={{ marginBottom: "8px" }}>
            <div
              className={styles.element}
              style={{
                maxWidth: "343px",
                height: "198px",
                padding: "0px",
                width: "94vw",
              }}
            >
              <div className={styles.card}>
                <img
                  src="/dogs.png"
                  alt=""
                  className={styles.avatar}
                  style={{ maxWidth: "335px", width: "90vw" }}
                />
              </div>
              <div style={{ width: "96%" }}>
                {" "}
                <h4>Выставка охотничьих собак</h4>
                <div className={styles.cardInfo}>
                  <p className={styles.cardName}>
                    Городская выставка охотничьих собак легавых пород
                  </p>
                </div>{" "}
              </div>{" "}
              <div className={styles.location}>
                <img
                  src="/location-outline.png"
                  alt=""
                  className={styles.locationImg}
                  style={{ width: "20px" }}
                />
                <p className={styles.city}>Екатеринбург</p>
              </div>
              <div className={styles.location}>
                <img
                  src="/Calendar.png"
                  alt=""
                  className={styles.locationImg}
                  style={{ width: "20px" }}
                />
                <p className={styles.city}>24 февраля - 2 марта 2025 г.</p>
              </div>
            </div>
            <div
              className={styles.element}
              style={{
                maxWidth: "343px",
                height: "198px",
                padding: "0px",
                width: "94vw",
              }}
            >
              <div className={styles.card}>
                <img
                  src="/dogs.png"
                  alt=""
                  className={styles.avatar}
                  style={{ maxWidth: "335px", width: "90vw" }}
                />
              </div>
              <div style={{ width: "96%" }}>
                {" "}
                <h4>Выставка охотничьих собак</h4>
                <div className={styles.cardInfo}>
                  <p className={styles.cardName}>
                    Городская выставка охотничьих собак легавых пород
                  </p>
                </div>{" "}
              </div>{" "}
              <div className={styles.location}>
                <img
                  src="/location-outline.png"
                  alt=""
                  className={styles.locationImg}
                  style={{ width: "20px" }}
                />
                <p className={styles.city}>Екатеринбург</p>
              </div>
              <div className={styles.location}>
                <img
                  src="/Calendar.png"
                  alt=""
                  className={styles.locationImg}
                  style={{ width: "20px" }}
                />
                <p className={styles.city}>24 февраля - 2 марта 2025 г.</p>
              </div>
            </div>
          </div>
          <h2 className={styles.title}>На модерации</h2>{" "}
          <div className={styles.label} style={{ marginBottom: "8px" }}>
            <div
              className={styles.element}
              style={{
                maxWidth: "343px",
                height: "198px",
                padding: "0px",
                width: "94vw",
              }}
            >
              <div className={styles.card}>
                <img
                  src="/dogs.png"
                  alt=""
                  className={styles.avatar}
                  style={{ maxWidth: "335px", width: "90vw" }}
                />
              </div>
              <div style={{ width: "96%" }}>
                {" "}
                <h4>Выставка охотничьих собак</h4>
                <div className={styles.cardInfo}>
                  <p className={styles.cardName}>
                    Городская выставка охотничьих собак легавых пород
                  </p>
                </div>{" "}
              </div>{" "}
              <div className={styles.location}>
                <img
                  src="/location-outline.png"
                  alt=""
                  className={styles.locationImg}
                  style={{ width: "20px" }}
                />
                <p className={styles.city}>Екатеринбург</p>
              </div>
              <div className={styles.location}>
                <img
                  src="/Calendar.png"
                  alt=""
                  className={styles.locationImg}
                  style={{ width: "20px" }}
                />
                <p className={styles.city}>24 февраля - 2 марта 2025 г.</p>
              </div>
            </div>
            <div
              className={styles.element}
              style={{
                maxWidth: "343px",
                height: "198px",
                padding: "0px",
                width: "94vw",
              }}
            >
              <div className={styles.card}>
                <img
                  src="/dogs.png"
                  alt=""
                  className={styles.avatar}
                  style={{ maxWidth: "335px", width: "90vw" }}
                />
              </div>
              <div style={{ width: "96%" }}>
                {" "}
                <h4>Выставка охотничьих собак</h4>
                <div className={styles.cardInfo}>
                  <p className={styles.cardName}>
                    Городская выставка охотничьих собак легавых пород
                  </p>
                </div>{" "}
              </div>{" "}
              <div className={styles.location}>
                <img
                  src="/location-outline.png"
                  alt=""
                  className={styles.locationImg}
                  style={{ width: "20px" }}
                />
                <p className={styles.city}>Екатеринбург</p>
              </div>
              <div className={styles.location}>
                <img
                  src="/Calendar.png"
                  alt=""
                  className={styles.locationImg}
                  style={{ width: "20px" }}
                />
                <p className={styles.city}>24 февраля - 2 марта 2025 г.</p>
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
export default MyEvents;
