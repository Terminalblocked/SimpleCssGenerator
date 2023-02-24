import { useState } from "react";
import styles from "./SliderItem.module.scss";

function SliderItem({ title, value, onInputChange }) {
  const handleChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div className={styles.sliderItem}>
      <h4>{title}:</h4>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
      <div>{value}</div>
    </div>
  );
}

export default SliderItem;
