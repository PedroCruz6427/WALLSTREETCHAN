import Link from "next/link";

export default function threads({ posts }) {
  return (
    <div>
      <Link href="/">HOME</Link>
      <h1>TEST</h1>
      <hr></hr>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>TITLE</h1>
          <h4>{post.title}</h4>
          <h2>Body</h2>
          <p>{post.body}</p>
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { posts: data },
  };
}
