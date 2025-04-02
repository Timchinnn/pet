import React, { useState } from "react";
import styles from "./Services.module.css";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };
  // Симуляция данных от API
  const cardData = [
    {
      id: 1,
      image: "/dog.png",
      rating: "4.9",
      title: "Кобель на вязку",
      category: "Вязка",
      location: "Екатеринбург",
      price: "1000₽",
      breed: "Лабрадор",
      description:
        "Породистый кобель лабрадора, есть все документы, прививки. Опыт вязки.",
    },
    {
      id: 2,
      image: "/dog.png",
      rating: "4.8",
      title: "Щенки хаски",
      category: "Продажа",
      location: "Москва",
      price: "30000₽",
      breed: "Хаски",
      description:
        "Чистокровные щенки хаски, родители-чемпионы. Возраст 2 месяца.",
    },
    {
      id: 3,
      image: "/dog.png",
      rating: "4.7",
      title: "Вязка лабрадора",
      category: "Вязка",
      location: "Санкт-Петербург",
      price: "2000₽",
      breed: "Лабрадор",
      description: "Племенной кобель лабрадора для вязки. Родословная РКФ.",
    },
    {
      id: 4,
      image: "/dog.png",
      rating: "5.0",
      title: "Щенки овчарки",
      category: "Продажа",
      location: "Новосибирск",
      price: "25000₽",
      breed: "Немецкая овчарка",
      description:
        "Щенки немецкой овчарки от титулованных родителей. Документы РКФ.",
    },
    {
      id: 5,
      image: "/dog.png",
      rating: "4.6",
      title: "Кобель для вязки",
      category: "Вязка",
      location: "Казань",
      price: "1500₽",
      breed: "Золотистый ретривер",
      description:
        "Опытный кобель золотистого ретривера. Отличная родословная.",
    },
    {
      id: 6,
      image: "/dog.png",
      rating: "4.9",
      title: "Щенки корги",
      category: "Продажа",
      location: "Екатеринбург",
      price: "40000₽",
      breed: "Вельш-корги пемброк",
      description:
        "Очаровательные щенки корги. Привиты по возрасту, документы готовы.",
    },
  ];
  return (
    <div
      className="Ads"
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
          </div>
          <div className={styles.searchContainer}>
            <div className={styles.search}>
              <img src="/Search.png" alt="" className={styles.searchImg} />
              <input
                type="text"
                placeholder="Найти..."
                className={styles.searchInput}
              />
            </div>
            <img
              src="/Filter.png"
              alt=""
              className={styles.searchFilter}
              onClick={() => navigate("/filter")}
            />
          </div>
          <div className={styles.navigate}>
            <button>Предложения вязки</button>
            <button>Покупка/Продажа</button>
            <button>Щенки</button>
            <button>Щенки</button>
          </div>
          <div className={styles.elementsContainer}>
            <div className={styles.elements}>
              {cardData.map((card) => (
                <div
                  key={card.id}
                  className={styles.element}
                  onClick={() => handleCardClick(card)}
                >
                  <div className={styles.card}>
                    <img src={card.image} alt="" className={styles.avatar} />
                    <div className={styles.starCount}>
                      <img src="/Star.png" alt="" className={styles.star} />
                      <p>{card.rating}</p>
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <p className={styles.cardDesc}>{card.title}</p>
                    <p className={styles.cardName}>{card.category}</p>
                    <div className={styles.location}>
                      <img
                        src="/location-outline.png"
                        alt=""
                        className={styles.locationImg}
                      />
                      <p className={styles.city}>{card.location}</p>
                    </div>
                    <div className={styles.offer}>
                      <div className={styles.price}>
                        <p className={styles.priceCount}>{card.price}</p>
                      </div>
                      <img src="/Like.png" alt="" className={styles.like} />
                    </div>
                  </div>
                </div>
              ))}
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
      </div>{" "}
      {isModalOpen && selectedCard && (
        <div>
          <div
            className={`${styles.modalOverlay} ${
              isModalOpen ? styles.modalOverlayVisible : ""
            }`}
            onClick={() => setIsModalOpen(false)}
          />
          <div
            className={`${styles.modal} ${isModalOpen ? styles.modalOpen : ""}`}
          >
            <div className={styles.modalContent}>
              <div className={styles.imageContainer}>
                <div className={styles.mainImage}>
                  <img
                    src={selectedCard.image}
                    alt=""
                    className={styles.modalImage}
                  />
                  <div className={styles.starCount}>
                    <img src="/Star.png" alt="" className={styles.star} />
                    <p>{selectedCard.rating}</p>
                  </div>
                </div>
                <div className={styles.thumbnails}>
                  <img src={selectedCard.image} alt="" />
                  <img src={selectedCard.image} alt="" />
                  <img src={selectedCard.image} alt="" />
                </div>
              </div>
              <div className={styles.modalInfo}>
                <h3>{selectedCard.title}</h3>
                <p className={styles.breed}>{selectedCard.breed}</p>
                <p className={styles.category}>{selectedCard.category}</p>
                <div className={styles.location}>
                  <img
                    src="/location-outline.png"
                    alt=""
                    className={styles.locationImg}
                  />
                  <p>{selectedCard.location}</p>
                </div>
                <p className={styles.description}>{selectedCard.description}</p>
                <div className={styles.owner}>
                  <img src="/1.png" alt="" className={styles.ownerAvatar} />
                  <div>
                    <p className={styles.ownerLabel}>Хозяин</p>
                    <p className={styles.ownerName}>Анатолий</p>
                  </div>
                </div>
                <div className={styles.price}>
                  <p>{selectedCard.price}</p>
                </div>
                <div className={styles.actions}>
                  <img src="/Share.png" alt="" className={styles.actionIcon} />
                  <img src="/Edit.png" alt="" className={styles.actionIcon} />
                  <img src="/Delete.png" alt="" className={styles.actionIcon} />
                </div>
                <button className={styles.contactButton}>
                  Связаться с продавцом
                </button>
                <button className={styles.reportButton}>Пожаловаться</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Services;
