import React from "react";
import styles from "./App.module.scss";
import LeftSide from "./LeftSide/LeftSide";
import RightSide from "./RightSide/RightSIde";

function App() {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <LeftSide />
          <RightSide />
        </div>
      </div>
    </>
  );
}

export default App;
