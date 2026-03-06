import styles from "./page.module.css";
import Container from "./components/container/Container";
import Box from "./components/box/Box";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className={styles.containerContainer}>
          <Container duration={1.2} delay={5} />
          <Container duration={1.2} delay={5.2} />
          <Container duration={1.2} delay={5.1} />
          <Container duration={1.2} delay={5.3} />
        </div>
      </section>
      <section className={styles.section} >
        <div id="trigger" className={styles.stack}>
          <Box directionX={0} directionY={100} bgColor="red" />
          <Box directionX={100} directionY={0} bgColor="blue" />
          <Box directionX={-100} directionY={0} bgColor="green" />
          <Box directionX={0} directionY={-100} bgColor="yellow" />
        </div>
      </section>
      <section className={styles.section}></section>
    </div>
  );
}