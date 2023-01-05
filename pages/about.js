import Head from "next/head";
import styles from "/styles/About.module.css";
export default function About() {
  return (
    <>
      <Head>
        <title>WallStreetChan</title>
        <meta
          name="description"
          content="Stock discussion board with free speech and complete anonymity. "
        ></meta>
        <link rel="icon" href="/wsBull.png" />
      </Head>
      <article>
        <p className={styles.text}>
          This was the first website I ever made, the purpose behind it was to
          practice the fundamentals of web development and learn the basics.
          More importantly though, I used this as an opportunity to learn the
          back end aspect as well and practice API/communicating with a database
          and fetching/displaying that information.
        </p>
      </article>
    </>
  );
}
