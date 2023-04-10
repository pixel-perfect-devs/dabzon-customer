export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // get product data
      const { productId } = req.query;
      const productData = await fetch("http://localhost:3000/api/product/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });
      const dataOfProduct = await productData.json();

      // capture brand and category from data
      const capacityData = await fetch("http://localhost:3000/api/capacity/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ brand: dataOfProduct.allData.productBrand, category: dataOfProduct.allData.productCategory }),
      });
      const dataOfCapacity = await capacityData.json();

      // return capacity data and product data
      return res.status(200).json({ capacityData: dataOfCapacity, productData: dataOfProduct });
    } catch (error) {
      console.log(error);
      res.status(500).json({ data: error });
    }
  }
}
