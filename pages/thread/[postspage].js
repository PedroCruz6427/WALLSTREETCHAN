import { useRouter } from "next/router";
import Head from "next/head";
import PostPage from "../../components/PostPage";
import styles from "/styles/Post-page.module.css";
// import { MongoClient } from "mongodb";

function Postspage(props) {
  // console.log(props);
  const opPostData = props.posts;
  // console.log(opPostData);

  // const desiredPost = opPostData.filter(postId);
  // console.log(desiredPost);
  const router = useRouter();
  let postId = router.query.postspage;
  console.log(postId + " hiiiiiiiiii");

  // Finding  object with id
  const foundItem = opPostData.find((desired) => desired._id == postId);
  const { _id, title, text, replies } = foundItem;
  console.log(_id, title, text, replies);
  console.log(foundItem);
  if (postId === _id) {
    console.log("success");
  } else {
    console.log("fail");
  }
  // console.log(postId);

  return (
    <>
      <Head>
        <title>WallStreetChan</title>
        <link rel="icon" href="/wsBull.png" />
      </Head>
      {/* <PostPage postId={postId} /> */}
      <section className={styles.postsbox}>
        <h1 className={styles.title}>{title}</h1>
        <h4 className={styles.text}>{text}</h4>
      </section>

      <section>
        {replies.map((reply, index) => {
          return (
            <section className={styles.postsBoxReply} key={index}>
              <h4 className={styles.text}>{reply}</h4>
            </section>
          );
        })}
      </section>
      <PostPage postId={postId} />
    </>
  );
}

export default Postspage;
//send a request to the backend API
// to fetch the news item with postspage

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/home");
  const data = await res.json();

  return {
    props: { posts: data },
    revalidate: 1,
  };
}
// export async function getStaticProps(context) {
//   const client = await MongoClient.connect(
//     "mongodb+srv://Khan1:6F7h8ppNrVj3vdlB@cluster0.ewzresa.mongodb.net/WSC?retryWrites=true&w=majority"
//   );

//   const db = client.db();

//   const postsCollection = db.collection("posts");

//   const posts = await postsCollection.find().toArray();
//   client.close();

//   return {
//     props: {
//       postList: posts.map((post) => ({
//         title: post.title,
//         text: post.text,
//         id: post._id.toString(),
//       })),
//     },
//     revalidate: 1,
//   };
// }

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
