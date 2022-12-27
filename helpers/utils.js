const johnny = async function grabPosts() {
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
};

export async function connectToDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://Khan1:6F7h8ppNrVj3vdlB@cluster0.ewzresa.mongodb.net/WSC?retryWrites=true&w=majority"
  );

  const db = client.db();
}

export async function test() {
  const client = await MongoClient.connect(
    "mongodb+srv://Khan1:6F7h8ppNrVj3vdlB@cluster0.ewzresa.mongodb.net/WSC?retryWrites=true&w=majority"
  );

  const db = client.db();

  const postsCollection = db.collection("posts");

  const posts = await postsCollection.find().toArray();
  client.close();
}
