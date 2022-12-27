import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import QuoteDisplay from "../components/QuoteDisplay";
import NewThreadForm from "../components/NewThreadForm";
import Posts from "../components/Posts";
import Link from "next/dist/client/link";
import { MongoClient } from "mongodb";

export default function Home(props) {
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
        <h1>This is the Footer</h1>
      </footer>
      <Link href="/thread">Threads Link</Link>
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
