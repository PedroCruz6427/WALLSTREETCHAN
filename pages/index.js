import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import QuoteDisplay from "../components/QuoteDisplay";
import NewThreadForm from "../components/NewThreadForm";
import Posts from "../components/Posts";
import Link from "next/dist/client/link";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();
  const refreshData = () => {
    // router.replace(router.asPath);
    router.reload();
  };
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
      <QuoteDisplay />
      <br></br>
      <NewThreadForm />
      <h3>Current Threads</h3>
      <section className={styles.postsContainer}>
        {props.postList.map((posts) => (
          <Posts
            title={posts.title}
            text={posts.text}
            key={posts.id}
            id={posts.id}
          />
        ))}
      </section>
      <footer className={styles.footer}>
        <button className={styles.refreshButton} onClick={refreshData}>
          Refresh
        </button>
        <Link href="/about">About</Link>
      </footer>
    </>
  );
}
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Khan1:6F7h8ppNrVj3vdlB@cluster0.ewzresa.mongodb.net/WSC?retryWrites=true&w=majority"
  );

  const db = client.db();

  const postsCollection = db.collection("posts");

  const posts = await postsCollection.find().toArray();
  client.close();

  return {
    props: {
      postList: posts.map((post) => ({
        title: post.title,
        text: post.text,
        id: post._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
