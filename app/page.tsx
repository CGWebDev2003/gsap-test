import styles from "./page.module.css";
import Box from "./components/box/Box";

export default function Home() {

  return (
    <div className={styles.page}>
      <Box className="box" />
    </div>
  );
}
