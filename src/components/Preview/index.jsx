import styles from "./Preview.module.scss";


function Preview({ borderRadius }) {
  const style = { borderRadius };

  return <div style={style} className={styles.preview}></div>;
}

export default Preview;
