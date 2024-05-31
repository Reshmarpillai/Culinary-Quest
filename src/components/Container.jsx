import styles from "./css/Container.module.css";
export default function ({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
