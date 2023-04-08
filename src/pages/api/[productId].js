export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { productId } = req.query;
      const response = await fetch("http://localhost:3000/api/product/get", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });
      const data = await response.json();
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ data: error });
    }
  }
}
