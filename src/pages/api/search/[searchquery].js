import clientPromise from "../../../../backend/database/connect";
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { searchquery } = await req.query;
      const client = await clientPromise;
      const db = await client.db("dabzon");
      const collection = await db.collection("product");
      const response = await collection.find({ tags: { $elemMatch: { $eq: searchquery } } }).toArray()
      // console.log(response)
      return res.status(200).json({ msg: response });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error });
    }
  }
}
