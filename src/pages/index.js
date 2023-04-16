import Head from "next/head";
import ShopByCategory from "../components/LandingPageComponents/ShopByCategory/index";
import TopOffers from "../components/LandingPageComponents/TopOffers/index";
import OtherSupport from "../components/LandingPageComponents/OtherSupports/index";
import ShopByBrand from "../components/LandingPageComponents/ShopByBrand/index";
import FooterComponents from "../components/FooterComponents/index";
import NavBar from "../components/NavBar/index";
import OfferCarousel from "../components/LandingPageComponents/OfferCarousel/index";
import TopSellingBatteries from "../components/LandingPageComponents/TopSellingBatteries/index";
import FAQ from "../components/LandingPageComponents/FAQ/index";
import BestFeedback from "../components/LandingPageComponents/BestFeedback/index";
import BlogComponents from "../components/BlogComponents/index";
import { useState, useEffect } from "react";

export default function Home({ shopbycategoryData, showTopSellingProductsData }) {
  const [city ,setCity] = useState("");
  //get location
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
    };
    if('geolocation' in navigator) {    // if location allowed
        // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
        navigator.geolocation.getCurrentPosition( async({ coords }) => {
            const { latitude, longitude } =  coords;
            // this api gives location details from latitude and longitude
            console.log(coords);
            const res= await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`)
            const data= await res.json();
            console.log(data.city);
            setCity(data.city);
        })
    }
    else{       // if location not allowed
      setCity("none");
    }
}, []);
  return (
    <>
      <Head>
        <title>Dabzon - India</title>
        <meta
          name="description"
          content="An ecommerce store - Batteries and inverters"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main__page bg-gray-100 ">
        <NavBar />
        {/* <OfferCarousel/>
        <OtherSupport />
        <ShopByCategory data={shopbycategoryData} />
        <TopOffers />
        <ShopByBrand />
        <TopSellingBatteries title="Top Selling Batteries" topSellingProducts={showTopSellingProductsData} />
        <BestFeedback />
        <BlogComponents source="home" blogHeading="Blogs" /> */}
        <FAQ />
        <FooterComponents />
      </main>
    </>
  );
}

// export async function getServerSideProps(context) {
//   // this api is on dabzon-admin
//   //if any confusion just "!! console.log(resJSON) !!"
//   const value = await Promise.all([
//     fetch("http://localhost:3001/api/landingpage/shopbycategory").then((res) =>
//       res.json()
//     ),
//     fetch("http://localhost:3001/api/landingpage/showtopsellingproducts").then(
//       (res) => res.json()
//     ),
//   ])
  
//   return {
//     props: {
//       shopbycategoryData: value[0].allData,
//       showTopSellingProductsData: value[1].data
//      },
//   };
// }

// this code will check whether connection between frontend, backend, database is working fine
// to use this just paste these three lines in getServer function
// if output is  " Connected to Database " then everything is working fine

// await fetch("http://localhost:3000/api/checkconnection")
// .then((res)=>res.json())
// .then((data)=>console.log(data.msg));