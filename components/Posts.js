import styles from "/styles/Posts.module.css";
import Link from "next/link";
// import { MongoClient } from "mongodb";

function Posts({ id, title, text }) {
  // console.log(key);
  return (
    <>
      {/* <div className={styles.postsContainer}> */}
      <Link href={`/thread/` + id} key={id}>
        <a className="postPreview">
          <div className={styles.postBox}>
            <div className="post-title">{title}</div>
            <div className="post-text">{text}</div>
          </div>
        </a>
      </Link>

      {/* </div> */}
    </>
  );
}
export default Posts;
