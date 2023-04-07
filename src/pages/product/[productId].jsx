import React, { useEffect } from 'react'
import NavBar from '../../components/NavBar/index'
import FooterComponents from '../../components/FooterComponents/index'
import { useRouter } from 'next/router';
import Productdetailsview from '@/components/ProductComponents/index';
import TopSellingBatteries from "@/components/LandingPageComponents/TopSellingBatteries/index";
import battery from "../../../public/battery.png";
import top_offers from "../../../public/top_offers.png";
import offerCarousel_image from "../../../public/offerCarousel_image.png";

const ProductDetailsPage = () => {

  const router = useRouter();
  const { productId } = router.query;
  // fetch details from the productId and remove the hard coded item

  let item = {
    id: 2,
    name: "Exide Inva Tubular Battery",
    defaultOriginalPrice: 5000,
    tag: "Tubular",
    image1: battery,
    image2: top_offers,
    image3: offerCarousel_image,
    showPrice: 6000, // increase price by 10%
    withExchange: 4500,
    withoutExchange: 5000,
    withTrolley: 6500,
    withoutTrolley: 5000,
    couponCode: { "EXIDE10": 10, "edii93": 33 },
    capacity: { "100Ah": 8000, "150Ah": 8000, "200Ah": 7000 },
    warranty: "3 years",
    replacement: "10 days",
    rating: 4.5,
    defaultDeliveryCity: 'bangaluru',
    deliveryCity: { "patna": 5000, "mumbai": 4000, "delhi": 8000 },
    inStock: 10,
    productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro nulla animi totam, sapiente, eius aliquam quidem maiores corporis cupiditate sit error cumque nisi eum ad culpa! Eius sed, est, iusto veritatis adipisci officiis quos recusandae rerum quod, corrupti distinctio!",
    productNote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro nulla animi totam, sapiente, eius aliquam quidem maiores corporis cupiditate sit err',
    features: ['advance tubular battery single water indicater', 'high resistance to heat makes the battery perfect for indian wearher conditions.'],
    specification: { 'Net Weight': '20.5 kg', 'Battery Layout': 'left', 'Capacity': '47 kg', 'Technology': 'Advance tubular', 'Modal': 'Luminous INVAHOMZ IHST1500', }
  }

  return (
    <div className='ProductDetailsPage'>
      <NavBar />
      <Productdetailsview productId={productId} item={item} />
      {/* <TopSellingBatteries title="Recommended for you" /> */}
      <FooterComponents />
    </div>
  )
}

export default ProductDetailsPage