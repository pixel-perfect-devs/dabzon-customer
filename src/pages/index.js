import Head from 'next/head'
import ShopByCategory from '../components/LandingPageComponents/ShopByCategory/index'
import TopOffers from '../components/LandingPageComponents/TopOffers/index'
import OtherSupport from '../components/LandingPageComponents/OtherSupports/index'
import ShopByBrand from '../components/LandingPageComponents/ShopByBrand/index'
import FooterComponents from '../components/FooterComponents/index'
import NavBar from '../components/NavBar/index'
import OfferCarousel from '../components/LandingPageComponents/OfferCarousel/index'
import TopSellingBatteries from '../components/LandingPageComponents/TopSellingBatteries/index'
import FAQ from '../components/LandingPageComponents/FAQ/index'
import BestFeedback from '../components/LandingPageComponents/BestFeedback/index'
import BlogComponents from '../components/BlogComponents/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dabzon - India</title>
        <meta name="description" content="An ecommerce store - Batteries and inverters" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main__page bg-gray-100 ">
        <NavBar />
        {/* <OfferCarousel/> */}
        <OtherSupport />
        <ShopByCategory />
        <TopOffers />
        <ShopByBrand />
        <TopSellingBatteries title="Top Selling Batteries" />
        <BestFeedback />
        <BlogComponents source="home" blogHeading="Blogs" />
        <FAQ />
        <FooterComponents />
      </main>
    </>
  )
}
