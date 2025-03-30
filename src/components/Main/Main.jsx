import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Main.module.css";
function Main() {
  const navigate = useNavigate();

  return (
    <div
      className="main"
      style={{
        width: "100%",
        display: "flex",

        alignItems: "center",
        justifyContent: "center",
        overflowX: "hidden",
      }}
    >
      <div className={styles.container}>
        <div
          className={styles.main}
          style={{ marginTop: "16px", marginBottom: "25px" }}
        >
          <div className={styles.label} style={{ marginBottom: "8px" }}>
            <h2>Объявления</h2>
            <img
              src="/ButtonArrow.png"
              alt=""
              onClick={() => navigate("/ads")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <h3>
            Продажа, покупка собак, щенки, предложения вязки, анонсы помёта
          </h3>
          <div
            className={styles.elements}
            onTouchStart={(e) => {
              const touch = e.touches[0];
              e.currentTarget.dataset.startX = touch.clientX;
              e.currentTarget.dataset.startScrollLeft =
                e.currentTarget.scrollLeft;
            }}
            onTouchMove={(e) => {
              if (!e.currentTarget.dataset.startX) return;

              const touch = e.touches[0];
              const startX = parseFloat(e.currentTarget.dataset.startX);
              const walk = (startX - touch.clientX) * 1.5;

              e.currentTarget.scrollLeft =
                parseFloat(e.currentTarget.dataset.startScrollLeft) + walk;
            }}
            onTouchEnd={(e) => {
              delete e.currentTarget.dataset.startX;
              delete e.currentTarget.dataset.startScrollLeft;
            }}
          >
            {" "}
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
                  <div className={styles.price}>
                    <p className={styles.priceCount}> 1000₽</p>
                  </div>
                  <img src="/Like.png" alt="" className={styles.like} />
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
                  <div className={styles.price}>
                    <p className={styles.priceCount}> 1000₽</p>
                  </div>
                  <img src="/Like.png" alt="" className={styles.like} />
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
                  <div className={styles.price}>
                    <p className={styles.priceCount}> 1000₽</p>
                  </div>
                  <img src="/Like.png" alt="" className={styles.like} />
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
        <div className={styles.main} style={{ marginBottom: "25px" }}>
          <div className={styles.label} style={{ marginBottom: "8px" }}>
            <h2>Услуги</h2>
            <img
              src="/ButtonArrow.png"
              alt=""
              onClick={() => navigate("/services")}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div
            className={styles.elements}
            onTouchStart={(e) => {
              const touch = e.touches[0];
              e.currentTarget.dataset.startX = touch.clientX;
              e.currentTarget.dataset.startScrollLeft =
                e.currentTarget.scrollLeft;
            }}
            onTouchMove={(e) => {
              if (!e.currentTarget.dataset.startX) return;

              const touch = e.touches[0];
              const startX = parseFloat(e.currentTarget.dataset.startX);
              const walk = (startX - touch.clientX) * 1.5;

              e.currentTarget.scrollLeft =
                parseFloat(e.currentTarget.dataset.startScrollLeft) + walk;
            }}
            onTouchEnd={(e) => {
              delete e.currentTarget.dataset.startX;
              delete e.currentTarget.dataset.startScrollLeft;
            }}
          >
            {" "}
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
                  <div className={styles.price}>
                    <p className={styles.priceCount}> 1000₽</p>
                  </div>
                  <img src="/Like.png" alt="" className={styles.like} />
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
                  <div className={styles.price}>
                    <p className={styles.priceCount}> 1000₽</p>
                  </div>
                  <img src="/Like.png" alt="" className={styles.like} />
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
                  <div className={styles.price}>
                    <p className={styles.priceCount}> 1000₽</p>
                  </div>
                  <img src="/Like.png" alt="" className={styles.like} />
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
                  <div className={styles.price}>
                    <p className={styles.priceCount}> 1000₽</p>
                  </div>
                  <img src="/Like.png" alt="" className={styles.like} />
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
        <div className={styles.main} style={{ marginBottom: "25px" }}>
          <div className={styles.label} style={{ marginBottom: "8px" }}>
            <h2>Популярное</h2>
            {/* <img src="/ButtonArrow.png" alt="" /> */}
          </div>

          <div
            className={styles.elements}
            onTouchStart={(e) => {
              const touch = e.touches[0];
              e.currentTarget.dataset.startX = touch.clientX;
              e.currentTarget.dataset.startScrollLeft =
                e.currentTarget.scrollLeft;
            }}
            onTouchMove={(e) => {
              if (!e.currentTarget.dataset.startX) return;

              const touch = e.touches[0];
              const startX = parseFloat(e.currentTarget.dataset.startX);
              const walk = (startX - touch.clientX) * 1.5;

              e.currentTarget.scrollLeft =
                parseFloat(e.currentTarget.dataset.startScrollLeft) + walk;
            }}
            onTouchEnd={(e) => {
              delete e.currentTarget.dataset.startX;
              delete e.currentTarget.dataset.startScrollLeft;
            }}
          >
            {" "}
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
                  <div className={styles.price}>
                    <p className={styles.priceCount}> 1000₽</p>
                  </div>
                  <img src="/Like.png" alt="" className={styles.like} />
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
                  <div className={styles.price}>
                    <p className={styles.priceCount}> 1000₽</p>
                  </div>
                  <img src="/Like.png" alt="" className={styles.like} />
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
                  <div className={styles.price}>
                    <p className={styles.priceCount}> 1000₽</p>
                  </div>
                  <img src="/Like.png" alt="" className={styles.like} />
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
                  <div className={styles.price}>
                    <p className={styles.priceCount}> 1000₽</p>
                  </div>
                  <img src="/Like.png" alt="" className={styles.like} />
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
        <div className={styles.main} style={{ marginBottom: "16px" }}>
          <div className={styles.label} style={{ marginBottom: "8px" }}>
            <h2>Мероприятия</h2>
            <img
              src="/ButtonArrow.png"
              alt=""
              onClick={() => navigate("/events")}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div
            className={styles.elements}
            onTouchStart={(e) => {
              const touch = e.touches[0];
              e.currentTarget.dataset.startX = touch.clientX;
              e.currentTarget.dataset.startScrollLeft =
                e.currentTarget.scrollLeft;
            }}
            onTouchMove={(e) => {
              if (!e.currentTarget.dataset.startX) return;

              const touch = e.touches[0];
              const startX = parseFloat(e.currentTarget.dataset.startX);
              const walk = (startX - touch.clientX) * 1.5;

              e.currentTarget.scrollLeft =
                parseFloat(e.currentTarget.dataset.startScrollLeft) + walk;
            }}
            onTouchEnd={(e) => {
              delete e.currentTarget.dataset.startX;
              delete e.currentTarget.dataset.startScrollLeft;
            }}
          >
            {" "}
            <div
              className={styles.element}
              style={{ minWidth: "212px", height: "237px", padding: "0px" }}
            >
              <div className={styles.card}>
                <img
                  src="/dogs.png"
                  alt=""
                  className={styles.avatar}
                  style={{ width: "192px" }}
                />
              </div>
              <div style={{ width: "90%" }}>
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
                />
                <p className={styles.city}>Екатеринбург</p>
              </div>
              <div
                className={styles.location}
                style={{ justifyContent: "space-between" }}
              >
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
              style={{ minWidth: "212px", height: "237px", padding: "0px" }}
            >
              <div className={styles.card}>
                <img
                  src="/dogs.png"
                  alt=""
                  className={styles.avatar}
                  style={{ width: "192px" }}
                />
              </div>
              <div style={{ width: "90%" }}>
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
                />
                <p className={styles.city}>Екатеринбург</p>
              </div>
              <div
                className={styles.location}
                style={{ justifyContent: "space-between" }}
              >
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
              style={{ minWidth: "212px", height: "237px", padding: "0px" }}
            >
              <div className={styles.card}>
                <img
                  src="/dogs.png"
                  alt=""
                  className={styles.avatar}
                  style={{ width: "192px" }}
                />
              </div>
              <div style={{ width: "90%" }}>
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
                />
                <p className={styles.city}>Екатеринбург</p>
              </div>
              <div
                className={styles.location}
                style={{ justifyContent: "space-between" }}
              >
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
              style={{ minWidth: "212px", height: "237px", padding: "0px" }}
            >
              <div className={styles.card}>
                <img
                  src="/dogs.png"
                  alt=""
                  className={styles.avatar}
                  style={{ width: "192px" }}
                />
              </div>
              <div style={{ width: "90%" }}>
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
                />
                <p className={styles.city}>Екатеринбург</p>
              </div>
              <div
                className={styles.location}
                style={{ justifyContent: "space-between" }}
              >
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
          {" "}
          <div className={styles.footer}>
            <div className={styles.footerContent}>
              {" "}
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
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
export default Main;
