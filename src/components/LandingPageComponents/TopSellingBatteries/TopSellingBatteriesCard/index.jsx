import React from "react";
import Image from "next/image";
import battery from "../../../../../public/battery.png"
import offerCarousel_image from "../../../../../public/offerCarousel_image.png"
import top_offers from "../../../../../public/top_offers.png"
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Card = ({item}) => {

  // items to be fetched from props
  // let item = {
  //   id: 2,
  //   name: "Exide Inva Tubular Battery",
  //   defaultOriginalPrice: 5000,
  //   tag: "Tubular",
  //   image1: battery,
  //   image2: top_offers,
  //   image3: offerCarousel_image,
  //   showPrice: 6000, // increase price by 10%
  //   withExchange: 4500,
  //   withoutExchange: 5000,
  //   withTrolley: 6500,
  //   withoutTrolley: 5000,
  //   couponCode: { "EXIDE10": 10, "edii93": 33 },
  //   capacity: { "100Ah": 8000, "150Ah": 8000, "200Ah": 7000 },
  //   warranty: "3 years",
  //   replacement: "10 days",
  //   rating: 4.5,
  //   defaultDeliveryCity: 'bangaluru',
  //   deliveryCity: { "patna": 5000, "mumbai": 4000, "delhi": 8000 },
  //   inStock: 10,
  //   productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro nulla animi totam, sapiente, eius aliquam quidem maiores corporis cupiditate sit error cumque nisi eum ad culpa! Eius sed, est, iusto veritatis adipisci officiis quos recusandae rerum quod, corrupti distinctio!",
  //   productNote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro nulla animi totam, sapiente, eius aliquam quidem maiores corporis cupiditate sit err',
  //   features: ['advance tubular battery single water indicater', 'high resistance to heat makes the battery perfect for indian wearher conditions.'],
  //   specification: { 'Net Weight': '20.5 kg', 'Battery Layout': 'left', 'Capacity': '47 kg', 'Technology': 'Advance tubular', 'Modal': 'Luminous INVAHOMZ IHST1500', }
  // }
  console.log(item)

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {}

  return (
    <div className="singleProductCard cursor-pointer border-2 border-gray-200 shadow-md w-[270px] rounded-xl ">

      <div className="singleProductCard__image__container bg-gray-200 rounded-t-xl relative">
        <div className="image__text__icon flex justify-between pt-4 px-4">
          <p className="cursor-pointer image__text border-2 text-green-500 border-green-500 rounded-full text-center px-3 py-[7px] text-sm">
            {item.tags[0]}
          </p>
          <button className="group rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex items-center justify-center text-gray-900 ml-4 focus:text-red-600 hover:text-red-600">
            <svg className="block group-hover:hidden group-focus:hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill="currentColor" d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
            </svg>
            <svg className="hidden group-hover:block group-focus:block" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
            </svg>
          </button>
        </div >
        <Image onClick={() => router.push(`/product/${item._id}`)} className="pb-2 w-60 m-auto" loading="lazy" src={item.image1} width={290} height={290} alt="Image is loading..." />
        <p className="discount border border-white px-3 py-1 bg-red-500 rounded-3xl absolute left-1 bottom-1 text-[10px] md:text-xs">{ item.withExchangeDiscount }% OFF</p>
      </div>
      {/* Math.round((item.price - item.defaultOriginalPrice) / item.productShowPrice * 100) */}

      <div className="singleProductCard__descripion">
        <div className="singleProductCard__title p-3 space-x-2 truncate text-xs md:text-sm">
          <span className="text-gray-900 ">{item.productName}</span>
          <span className="text-gray-500  ">{item.productShortDescription}</span>
        </div>

        <div className="singleProductCard__price border-gray-200 pb-1">
          <span className="text-[#10b981] text-lg md:text-2xl p-3 font-semibold">₹{item.price}</span>
          {/* showprive below */}
          <span className="text-gray-500 text-sm md:text-lg line-through">₹{item.price}</span>
        </div>

        <div className="singleProductCard__capacity__and__item">
          <div className="flex gap-1 justify-between mx-3 border-t-2 py-2 flex-wrap">
            <p>
              <span className="text-[#19d194] text-sm mr-1">Capacity:</span><span className="text-gray-900 text-xs truncate">{item.productCapacity}</span>
            </p>
            <p>
              <span className="text-[#19d194] text-sm mr-1">Warranty:</span><span className="text-gray-900 text-xs truncate">{item.warranty}</span>
            </p>
          </div>
        </div>

        <div className="singleProductCard__with__trolly flex justify-between mx-3 my-1">
          <span className="text-gray-900 text-xs md:text-sm">With Trolly</span><span className="text-[#10b981] text-sm md:text-lg">₹{item.trolleyPrice}</span>
        </div>

        <div className="singleProductCard__without__old__battery flex justify-between mx-3 my-1">
          <span className="text-gray-900 text-xs md:text-sm">With Exchange</span><span className="text-[#10b981] text-sm md:text-lg">₹{item.withExchangeDiscount}</span>
          {/* todo */}
        </div>

        <div className="flex justify-between mx-3 my-4">
          <button className="text-xs hover:bg-[#10b981] focus:bg-[#10b981] hover:text-white focus:text-white md:text-sm border-green-500 border-2 text-[#10b981] rounded-full px-4 py-[6px]">Buy now</button>
          <button onClick={() => handleAddToCart()} className="text-xs hover:bg-[#10b981] focus:bg-[#10b981] hover:text-white focus:text-white md:text-sm border-green-500 border-2 text-[#10b981] rounded-full px-4 py-[6px]">Add to cart</button>
        </div>
      </div>

    </div>
  );
};

export default Card;
