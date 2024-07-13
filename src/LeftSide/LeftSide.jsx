import React from "react";
import styles from "./LeftSide.module.scss";
import Data from "../Data";

const LeftSide = () => {
  console.log(Data);

  return (
    <div className={styles.box}>
      <div className={styles.links}>
        <h3>Photos from Unsplash</h3>
        <p>(can use these URLs as your img src)</p>
      </div>
      {Data.map((element, index) => (
        <div key={index} className={styles.links}>
          <h3>{element.location}</h3>
          <p>{element.imageUrl}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftSide;
