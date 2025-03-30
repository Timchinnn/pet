import React from "react";
import styles from "./Profile.module.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div
      className="Profile"
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
          <div className={styles.profile}>
            <div className={styles.profileAbout}>
              <img
                src="/1.png"
                alt=""
                style={{
                  width: "60px",
                  borderRadius: "50%",
                  border: "1px solid black",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "60px",
                  marginLeft: "15px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Gilroy",
                    fontWeight: "300",
                    fontSize: "12px",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                  }}
                >
                  Анатолий
                </p>
                <p
                  style={{
                    fontFamily: "Gilroy",
                    fontWeight: "300",
                    fontSize: "12px",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                    color: "grey",
                  }}
                >
                  Екатеринбург
                </p>
                <div className={styles.starCount}>
                  <img src="/Star.png" alt="" className={styles.star} />
                  <p>4,9</p>
                </div>
              </div>
            </div>
            <img src="/set.png" alt="" style={{ width: "44px" }} />
          </div>
          <div style={{ marginTop: "30px" }}>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p className={styles.menuTitle}>Мои объявления</p>
                <img
                  src="/ButtonArrow.png"
                  alt=""
                  style={{ width: "44px" }}
                  onClick={() => navigate("/myads")}
                />
              </div>
              <hr />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p className={styles.menuTitle}>Мои услуги</p>
                <img
                  src="/ButtonArrow.png"
                  alt=""
                  style={{ width: "44px" }}
                  onClick={() => navigate("/myservices")}
                />
              </div>
              <hr />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p className={styles.menuTitle}>Мои мероприятия</p>
                <img
                  src="/ButtonArrow.png"
                  alt=""
                  style={{ width: "44px" }}
                  onClick={() => navigate("/myevents")}
                />
              </div>
              <hr />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p className={styles.menuTitle}>Мои оценки</p>
                <img
                  src="/ButtonArrow.png"
                  alt=""
                  style={{ width: "44px" }}
                  onClick={() => navigate("/myratings")}
                />
              </div>
              <hr />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p className={styles.menuTitle}>Избранное</p>
                <img src="/ButtonArrow.png" alt="" style={{ width: "44px" }} />
              </div>
              <hr />
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <p className={styles.menuTitle}>Мои подписки</p>
                <img src="/ButtonArrow.png" alt="" style={{ width: "44px" }} />
              </div>
              <hr />
            </div>
          </div>
        </div>{" "}
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
export default Profile;
