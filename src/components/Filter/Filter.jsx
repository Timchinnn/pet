import React, { useState,useEffect } from "react";
import styles from "./Filter.module.css";
import { useNavigate } from "react-router-dom";

function Filter() {
    const navigate = useNavigate();
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.BackButton.show();
    tg.BackButton.onClick(() => navigate(-1));
    return () => {
      tg.BackButton.hide();
    };
  }, [navigate]);

  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [ageRange, setAgeRange] = useState([0, 20]);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [filters, setFilters] = useState({
    highRating: false,
    newFirst: false,
  });
  return (
    <div
      className="Filter"
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
          <h1 className={styles.mainTitle}>Фильтровать</h1>
          <div className={styles.filterSection}>
            <select
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className={styles.select}
            >
              <option value="">Выберите породу</option>
              <option value="labrador">Лабрадор</option>
              <option value="shepherd">Овчарка</option>
              <option value="husky">Хаски</option>
            </select>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className={styles.select}
            >
              <option value="">Выберите пол</option>
              <option value="male">Кобель</option>
              <option value="female">Сука</option>
            </select>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className={styles.select}
            >
              <option value="">Выберите категорию</option>
              <option value="breeding">Вязка</option>
              <option value="sale">Продажа</option>
              <option value="puppies">Щенки</option>
            </select>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={styles.select}
            >
              <option value="">Выберите город</option>
              <option value="moscow">Москва</option>
              <option value="spb">Санкт-Петербург</option>
              <option value="ekb">Екатеринбург</option>
            </select>
            <div className={styles.rangeContainer}>
              <p>Возраст</p>
              <input
                type="range"
                min="0"
                max="20"
                value={ageRange[0]}
                onChange={(e) =>
                  setAgeRange([parseInt(e.target.value), ageRange[1]])
                }
                className={styles.range}
              />
              <div className={styles.rangeValues}>
                <span>от {ageRange[0]} лет</span>
                <span>до {ageRange[1]} лет</span>
              </div>
            </div>
            <div className={styles.priceContainer}>
              <p>Цена</p>
              <div className={styles.priceInputs}>
                <input
                  type="number"
                  placeholder="От"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, min: e.target.value })
                  }
                  className={styles.priceInput}
                />
                <input
                  type="number"
                  placeholder="До"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, max: e.target.value })
                  }
                  className={styles.priceInput}
                />
              </div>
            </div>
            <div className={styles.checkboxContainer}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={filters.highRating}
                  onChange={(e) =>
                    setFilters({ ...filters, highRating: e.target.checked })
                  }
                  className={styles.checkbox}
                />
                Рейтинг выше 4
              </label>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={filters.newFirst}
                  onChange={(e) =>
                    setFilters({ ...filters, newFirst: e.target.checked })
                  }
                  className={styles.checkbox}
                />
                Сначала новые
              </label>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.add}>
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
export default Filter;
