import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  // for retreiving posts and displaying use this for displaying replies later
  //dont know if will work WIP
  if (req.method === "POST") {
    const { reply, id } = req.body;
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

    await postsCollection.updateOne(
      { _id: ObjectId(id) },
      {
        $push: {
          replies: reply,
        },
      }
    );
    client.close();
    res.status(200).json({ data: reply });
  }
}
export default handler;

//notes

//use .find to find id of thread to reply to then push to push replys into an array
