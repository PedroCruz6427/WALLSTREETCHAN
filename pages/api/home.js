import { MongoClient } from "mongodb";

async function handler(req, res) {
  //POST

  if (req.method === "POST") {
    const { title, text } = req.body;

    if (!title || !text || title.trim() === "" || text.trim() === "") {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    const replies = [];
    //Store in database
    const newPost = {
      title,
      text,
      replies,
    };

    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://Khan1:6F7h8ppNrVj3vdlB@cluster0.ewzresa.mongodb.net/WSC?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.error(500).json({ message: "Could not connect to database" });
    }

    const db = client.db();

    try {
      const result = await db.collection("posts").insertOne(newPost);
      newPost.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing post failed" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Post recieved", post: newPost });
  }

  //GET

  // for retreiving posts and displaying use this for displaying replies later
  //dont know if will work WIP
  if (req.method === "GET") {
    let client;

    try {
      client = await MongoClient.connect(
        "mongodb+srv://Khan1:6F7h8ppNrVj3vdlB@cluster0.ewzresa.mongodb.net/WSC?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.error(500).json({ message: "Could not connect to database" });
    }

    const db = client.db();

    const postsCollection = db.collection("posts");

    const posts = await postsCollection.find().toArray();

    client.close();
    res.status(200).json(posts);

    // return {
    //   props: posts,
    // };
  }
}

export default handler;
