import Head from "next/head";
import Graph from "./graph";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title> IOT-SNMS</title>
        <meta name="keyword" content="web development, programing" />
      </Head>
      <div className={styles.container}>
        <h1>IOT-SNMS</h1>
      </div>
      <Graph />
    </>
  );
}
