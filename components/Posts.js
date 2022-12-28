import styles from "/styles/Posts.module.css";
import Link from "next/link";

function Posts({ id, title, text }) {
  return (
    <>
      <Link href={`/thread/` + id} key={id}>
        <a className="postPreview">
          <div className={styles.postBox}>
            <div className="post-title">{title}</div>
            <div className="post-text">{text}</div>
          </div>
        </a>
      </Link>
    </>
  );
}
export default Posts;
