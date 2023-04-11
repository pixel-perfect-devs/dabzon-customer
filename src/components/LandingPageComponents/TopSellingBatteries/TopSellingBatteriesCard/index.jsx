import React from "react";
import Image from "next/image";
import battery from "../../../../../public/battery.png"
import offerCarousel_image from "../../../../../public/offerCarousel_image.png"
import top_offers from "../../../../../public/top_offers.png"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setCart, deleteFromCart } from "@/reduxStore/Slices/Cart/CartSlice";
import empty__heart from '../../../../../public/icons/empty__heart.svg'
import full__heart from '../../../../../public/icons/full__heart.svg'

const Card = ({ item }) => {

  const dispatch = useDispatch();
  const router = useRouter();
  const { cart } = useSelector(state => state.cart);

  const handleAddToCart = (e, item) => {
    let cartItem = {
      productBrand: item.productBrand,
      productCapacity: item.productCapacity,
      productCategory: item.productCategory,
      productCouponCode: null,
      productCouponCodeDiscount: null,
      productDeliveryCity: null,
      productDeliveryCityPrice: null,
      productFakeDiscount: item.fakeDiscount,
      productId: null,
      productImage: item.image1,
      productName: item.productName,
      productPayingPriceAfterCoupon: null,
      productPrice: item.price,
      productWithExchange: null,
      productWithTrolley: null,
      _id: item._id,
      quantity: 1,
    }
    dispatch(setCart(cartItem))
  }

  const handleBuyNow = (e) => {
    console.log(cart)
  }

  const handleRemoveFromCart = (e, id) => {
    e.preventDefault();
    dispatch(deleteFromCart(id))
  }

  return (
    <div className="singleProductCard cursor-pointer border-2 border-gray-200 shadow-md w-[270px] rounded-xl ">

      <div className="singleProductCard__image__container bg-gray-200 rounded-t-xl relative w-[268px] h-[250px]">
        <div className="image__text__icon flex justify-between py-4 px-4">
          <p className="cursor-pointer image__text border-2 text-green-500 border-green-500 rounded-full text-center px-3 py-[7px] text-sm">
            {item.tags[0]}
          </p>
          <button className="group rounded-full w-10 h-10 bg-gray-100 p-0 border-0 inline-flex items-center justify-center text-gray-900 ml-4 focus:text-red-600 hover:text-red-600">
            <Image width={20} height={20} src={empty__heart} alt="empty__heart" className="block group-hover:hidden group-focus-within:hidden " />
            <Image width={20} height={20} src={full__heart} alt="full__heart" className="hidden group-hover:block group-focus-within:block" />
          </button>
        </div >
        <Image onClick={() => router.push(`/product/${item._id}`)} className="pb-2 m-auto w-auto h-auto" loading="lazy" src={item.image1} width={100} height={100} alt="Image is loading..." />
        {
          item.fakeDiscount
            ? <p className="discount border border-white px-3 py-1 bg-red-500 rounded-3xl absolute left-1 bottom-1 text-[10px] md:text-xs">{item.fakeDiscount}% OFF</p>
            : null
        }
      </div>

      <div className="singleProductCard__descripion">
        <div className="singleProductCard__title p-3 space-x-2 truncate text-xs md:text-sm">
          <span className="text-gray-900 ">{item.productName}</span>
          <span className="text-gray-500  ">{item.productShortDescription}</span>
        </div>

        <div className="singleProductCard__price border-gray-200 pb-1 flex justify-between items-center pr-3">
          <span className="text-[#10b981] text-lg md:text-2xl p-3 font-semibold">₹{item.price}</span>
          {/* showprive below */}
          <span className="text-gray-500 text-sm md:text-lg line-through">₹{Math.round((+item.price) * 100 / (+item.fakeDiscount))}</span>
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
          <span className="text-gray-900 text-xs md:text-sm">With Exchange</span><span className="text-[#10b981] text-sm md:text-lg">₹{item.exchangeAmount}</span>
          {/* todo */}
        </div>

        <div className="flex justify-between mx-3 my-4">
          {
            // todo add to cart button
            cart.find((cart__item) => cart__item._id === item._id) !== undefined
              ? <>
                <button onClick={(e) => handleBuyNow(e, item)} className="text-xs hover:bg-[#10b981] focus:bg-[#10b981] hover:text-white focus:text-white md:text-sm border-green-500 border text-[#10b981] rounded-full px-4 py-[6px]">Buy now</button>
                <button onClick={(e) => handleRemoveFromCart(e, item._id)} className="text-xs hover:bg-red-600 focus:bg-red-500 hover:text-white focus:text-white md:text-sm border-red-500 border text-red-500 rounded-full px-4 py-[6px]">Remove</button>
              </>
              : <>
                <button onClick={(e) => handleBuyNow(e, item)} className="text-xs hover:bg-[#10b981] focus:bg-[#10b981] hover:text-white focus:text-white md:text-sm border-green-500 border-2 text-[#10b981] rounded-full px-4 py-[6px]">Buy now</button>
                <button onClick={(e) => handleAddToCart(e, item)} className="text-xs hover:bg-[#10b981] focus:bg-[#10b981] hover:text-white focus:text-white md:text-sm border-green-500 border-2 text-[#10b981] rounded-full px-4 py-[6px]">Add to cart</button>
              </>
          }
        </div>
      </div>

    </div>
  );
};

export default Card;
