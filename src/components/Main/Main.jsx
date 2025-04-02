import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Main.module.css";
function Main() {
  const navigate = useNavigate();
  const [selectedElement, setSelectedElement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const events = [
    {
      image: "/dogs.png",
      title: "Выставка охотничьих собак",
      description: "Городская выставка охотничьих собак легавых пород",
      location: "Екатеринбург",
      date: "24 февраля - 2 марта 2025 г.",
    },
    {
      image: "/dogs.png",
      title: "Выставка охотничьих собак",
      description: "Городская выставка охотничьих собак легавых пород",
      location: "Екатеринбург",
      date: "24 февраля - 2 марта 2025 г.",
    },
    {
      image: "/dogs.png",
      title: "Выставка охотничьих собак",
      description: "Городская выставка охотничьих собак легавых пород",
      location: "Екатеринбург",
      date: "24 февраля - 2 марта 2025 г.",
    },
    {
      image: "/dogs.png",
      title: "Выставка охотничьих собак",
      description: "Городская выставка охотничьих собак легавых пород",
      location: "Екатеринбург",
      date: "24 февраля - 2 марта 2025 г.",
    },
  ];
  const elements = [
    {
      image: "/dog.png",
      rating: "4,9",
      title: "Кобель на вязку",
      category: "Вязка",
      location: "Екатеринбург",
      price: "1000₽",
      breed: "Лабрадор",
      description:
        "Породистый кобель лабрадора, есть все документы, прививки. Опыт вязки.",
    },
    {
      image: "/dog.png",
      rating: "4,8",
      title: "Щенки хаски",
      category: "Продажа",
      location: "Москва",
      price: "30000₽",
      breed: "Хаски",
      description:
        "Чистокровные щенки хаски, родители-чемпионы. Возраст 2 месяца.",
    },
    {
      image: "/dog.png",
      rating: "4,7",
      title: "Вязка лабрадора",
      category: "Вязка",
      location: "Санкт-Петербург",
      price: "2000₽",
      breed: "Лабрадор",
      description: "Племенной кобель лабрадора для вязки. Родословная РКФ.",
    },
  ];
  const handleElementClick = (element) => {
    setSelectedElement(element);
    setIsModalOpen(true);
  };
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
            {elements.map((element, index) => (
              <div
                key={index}
                className={styles.element}
                onClick={() => handleElementClick(element)}
              >
                <div className={styles.card}>
                  <img src={element.image} alt="" className={styles.avatar} />
                  <div className={styles.starCount}>
                    <img src="/Star.png" alt="" className={styles.star} />
                    <p>{element.rating}</p>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardDesc}>{element.title}</p>
                  <p className={styles.cardName}>{element.category}</p>
                  <div className={styles.location}>
                    <img
                      src="/location-outline.png"
                      alt=""
                      className={styles.locationImg}
                    />
                    <p className={styles.city}>{element.location}</p>
                  </div>
                  <div className={styles.offer}>
                    <div className={styles.price}>
                      <p className={styles.priceCount}>{element.price}</p>
                    </div>
                    <img src="/Like.png" alt="" className={styles.like} />
                  </div>
                </div>
              </div>
            ))}
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
            {elements.map((element, index) => (
              <div
                key={index}
                className={styles.element}
                onClick={() => handleElementClick(element)}
              >
                <div className={styles.card}>
                  <img src={element.image} alt="" className={styles.avatar} />
                  <div className={styles.starCount}>
                    <img src="/Star.png" alt="" className={styles.star} />
                    <p>{element.rating}</p>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardDesc}>{element.title}</p>
                  <p className={styles.cardName}>{element.category}</p>
                  <div className={styles.location}>
                    <img
                      src="/location-outline.png"
                      alt=""
                      className={styles.locationImg}
                    />
                    <p className={styles.city}>{element.location}</p>
                  </div>
                  <div className={styles.offer}>
                    <div className={styles.price}>
                      <p className={styles.priceCount}>{element.price}</p>
                    </div>
                    <img src="/Like.png" alt="" className={styles.like} />
                  </div>
                </div>
              </div>
            ))}
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
            {elements.map((element, index) => (
              <div
                key={index}
                className={styles.element}
                onClick={() => handleElementClick(element)}
              >
                <div className={styles.card}>
                  <img src={element.image} alt="" className={styles.avatar} />
                  <div className={styles.starCount}>
                    <img src="/Star.png" alt="" className={styles.star} />
                    <p>{element.rating}</p>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                  <p className={styles.cardDesc}>{element.title}</p>
                  <p className={styles.cardName}>{element.category}</p>
                  <div className={styles.location}>
                    <img
                      src="/location-outline.png"
                      alt=""
                      className={styles.locationImg}
                    />
                    <p className={styles.city}>{element.location}</p>
                  </div>
                  <div className={styles.offer}>
                    <div className={styles.price}>
                      <p className={styles.priceCount}>{element.price}</p>
                    </div>
                    <img src="/Like.png" alt="" className={styles.like} />
                  </div>
                </div>
              </div>
            ))}
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
            {events.map((event, index) => (
              <div
                key={index}
                className={styles.element}
                style={{ minWidth: "212px", height: "237px", padding: "0px" }}
                onClick={() => handleElementClick(event)}
              >
                <div className={styles.card}>
                  <img
                    src={event.image}
                    alt=""
                    className={styles.avatar}
                    style={{ width: "192px" }}
                  />
                </div>
                <div style={{ width: "90%" }}>
                  <h4>{event.title}</h4>
                  <div className={styles.cardInfo}>
                    <p className={styles.cardName}>{event.description}</p>
                  </div>
                </div>
                <div className={styles.location}>
                  <img
                    src="/location-outline.png"
                    alt=""
                    className={styles.locationImg}
                  />
                  <p className={styles.city}>{event.location}</p>
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
                  <p className={styles.city}>{event.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.addContainer}>
            <div className={styles.add}>
              <img src="/Plus.png" alt="" className={styles.plus} />
              <p className={styles.addText}>Добавить</p>
            </div>
          </div>

          {isModalOpen && (
            <>
              <div
                className={styles.modalOverlay}
                onClick={() => setIsModalOpen(false)}
              />
              <div
                className={`${styles.modal} ${
                  isModalOpen ? styles.modalOpen : ""
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={styles.modalContent}>
                  {selectedElement && (
                    <>
                      <div className={styles.imageContainer}>
                        <div className={styles.mainImage}>
                          <img
                            src={selectedElement.image}
                            alt=""
                            className={styles.modalImage}
                          />
                          <div className={styles.starCount}>
                            <img
                              src="/Star.png"
                              alt=""
                              className={styles.star}
                            />
                            <p>{selectedElement.rating}</p>
                          </div>
                        </div>
                        <div className={styles.thumbnails}>
                          <img src={selectedElement.image} alt="" />
                          <img src={selectedElement.image} alt="" />
                          <img src={selectedElement.image} alt="" />
                        </div>
                      </div>

                      <div className={styles.modalInfo}>
                        <h3>{selectedElement.title}</h3>
                        <p className={styles.breed}>{selectedElement.breed}</p>
                        <p className={styles.category}>
                          {selectedElement.category}
                        </p>

                        <div className={styles.location}>
                          <img
                            src="/location-outline.png"
                            alt=""
                            className={styles.locationImg}
                          />
                          <p>{selectedElement.location}</p>
                        </div>

                        <p className={styles.description}>
                          {selectedElement.description}
                        </p>

                        <div className={styles.owner}>
                          <img
                            src="/1.png"
                            alt=""
                            className={styles.ownerAvatar}
                          />
                          <div>
                            <p className={styles.ownerLabel}>Хозяин</p>
                            <p className={styles.ownerName}>Анатолий</p>
                          </div>
                        </div>

                        <div className={styles.price}>
                          <p>{selectedElement.price}</p>
                        </div>

                        <div className={styles.actions}>
                          <img
                            src="/Share.png"
                            alt=""
                            className={styles.actionIcon}
                          />
                          <img
                            src="/Edit.png"
                            alt=""
                            className={styles.actionIcon}
                          />
                          <img
                            src="/Delete.png"
                            alt=""
                            className={styles.actionIcon}
                          />
                        </div>

                        <button className={styles.contactButton}>
                          Связаться с продавцом
                        </button>

                        <button className={styles.reportButton}>
                          Пожаловаться
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          )}
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
