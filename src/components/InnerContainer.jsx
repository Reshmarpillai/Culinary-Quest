import styles from "./css/InnerContainer.module.css";

export default function InnerComponents({ children }) {
  return <div className={styles.innerContainer}>{children}</div>;
}
