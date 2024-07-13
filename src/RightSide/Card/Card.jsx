import React from "react";
import styles from "./Card.module.scss";
import Data from "../../Data";
import icon from "./LocationIcon.svg";

const Card = () => {
  return (
    <>
      <div className={styles.card}>
        {Data.map((element, index) => (
          <div key={index} className={styles.box}>
            <img src={element.imageUrl} alt="" className={styles.photo} />
            <div className={styles.textBox}>
              <div className={styles.topText}>
                <img src={icon} alt="" />
                <h6>{element.location}</h6>
                <a href={element.googleMapsUrl}>View on Google Maps</a>
              </div>
              <h1>{element.title}</h1>
              <p>{`${element.startDate} - ${element.endDate}`}</p>
              <p className={styles.description}>{element.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
