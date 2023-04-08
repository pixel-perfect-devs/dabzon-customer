import React, { useEffect } from "react";
import ProductCapacityDropDown from './ProductCapacityDropDown/index'
import CheckDeliveryAvaibility from './CheckDeliveryAvaibility/index'

// import battery from "../../../public/battery.png";
import coupon from "../../../public/productdetailsview/coupon.png";
import rating from "../../../public/productdetailsview/rating.png";
import replacement from "../../../public/productdetailsview/replacement.png";
import warranty from "../../../public/productdetailsview/warranty.png";
import with_exchange from "../../../public/productdetailsview/with_exchange.png";
import without_exchange from "../../../public/productdetailsview/without_exchange.png";
import Image from "next/image";
import Link from "next/link";

const Productdetailsview = ({ productId }) => {

    const [productDetails, setProductDetails] = React.useState(null);

    const [mainImage, setMainImage] = React.useState(null);
    // const [originalPrice, setOriginalPrice] = React.useState(productDetails?.price);

    const [cartItem, setCartItem] = React.useState({
        productId: "",
        productName: "",
        productImage: "",
        productPrice: "",
        productWithExchange: 0,
        productWithTrolley: 0,
        productCouponCode: "",
        productCapacity: "",
        productDeliveryCity: "",
        productDeliveryCityPrice: "",
        productBrand: "",
        productCategory: "",
        productCapacityArray: [],
    });

    const fetchProductDetails = async (productId) => {
        if (!productId) return;
        const response = await fetch(`/api/${productId}`);
        const { productData, capacityData } = await response.json();
        console.log(productData)
        setProductDetails(productData.allData);
        setMainImage(productData.allData.image1);

        setCartItem(prev => prev = {
            ...prev,
            productId: productData.allData._id,
            productName: productData.allData.productName,
            productImage: productData.allData.image1,
            productPrice: productData.allData.price,
            productWithExchange: productData.allData.withExchange,
            productWithTrolley: productData.allData.withTrolley,
            productCapacity: productData.allData?.productCapacity,
            productBrand: productData.allData.productBrand,
            productCategory: productData.allData.productCategory,
            productCapacityArray: capacityData.allData,
        })
    }

    const buyNow = (e) => {
        e.preventDefault();
        console.log("buy now");
    }

    const addToCart = (e) => {
        e.preventDefault();
        if(cartItem.productDeliveryCity === "")return alert("Please select your city");
        delete cartItem.productCapacityArray
        console.log("add to cart", cartItem);
    }

    useEffect(() => {
        fetchProductDetails(productId);
    }, [productId])

    return (
        <div className="ProductDetailsPage my-8">
            {productDetails ?
                <div className="ProductDetailsPage__container max-w-7xl mx-auto ">
                    <div className="ProductDetailsPage__breadcrumbs my-4 px-[4vw]">
                        <Link href="/" className="text-[#10b981]">Home</Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <Link href="/all/topSellingProducts" className="text-[#10b981]">Products</Link>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-gray-400">{productDetails.productName}</span>
                    </div>

                    <div className="Product__image__specification flex justify-center flex-wrap ">
                        <div className="Product__image flex flex-col ">
                            <div className="product__main__image bg-gray-200 rounded-xl m-2 w-[250px] h-[250px] md:w-[490px] md:h-[300px] relative">
                                <div className="flex justify-between pt-4 px-4">
                                    <p className="border text-[#10b981] border-green-500 rounded-full text-xs px-4 py-[6px] text-center bg-gray-50">
                                        {productDetails.tags[0]}
                                    </p>
                                </div>
                                <Image className="p-4 w-auto h-auto mx-auto" loading="lazy" src={mainImage} width={450} height={280} alt="Image is loading..." />
                                <div className={`absolute bottom-0 left-0 flex justify-center items-center w-[6.5rem] h-[30px] ${+productDetails.stock > 0 ? 'border-green-500 text-green-500' : 'border-rose-500 text-rose-500'} bg-gray-50 border rounded-full ml-4 mb-4`}>
                                    <p className="flex text-xs">
                                        {productDetails.stock > 0 ? "In Stock" : "Out of Stock"}
                                    </p>
                                </div>
                            </div>
                            <div className="Product__images__container flex m-2 space-x-1 justify-between ">
                                <button className="rounded-xl border hover:border-green-500 focus:border-green-500 bg-gray-200 w-[95px] lg:w-[163px] sm:w-[145px] aspect-4/3">
                                    <Image onClick={() => setMainImage(prev => prev = productDetails.image1)}
                                        className="py-6"
                                        loading="lazy"
                                        src={productDetails.image1}
                                        width={1000}
                                        height={1000}
                                        alt="Image is loading..."
                                    />
                                </button>
                                <button className="rounded-xl border hover:border-green-500 focus:border-green-500 bg-gray-200 w-[95px] lg:w-[163px] sm:w-[145px] aspect-4/3">
                                    <Image onClick={() => setMainImage(prev => prev = productDetails.image2)}
                                        className="py-6"
                                        loading="lazy"
                                        src={productDetails.image2}
                                        width={1000}
                                        height={1000}
                                        alt="Image is loading..."
                                    />
                                </button>
                                <button className="rounded-xl border hover:border-green-500 focus:border-green-500 bg-gray-200 w-[95px] lg:w-[163px] sm:w-[145px] aspect-4/3">
                                    <Image onClick={() => setMainImage(prev => prev = productDetails.image3)}
                                        className="py-6  "
                                        loading="lazy"
                                        src={productDetails.image3}
                                        width={1000}
                                        height={1000}
                                        alt="Image is loading..."
                                    />
                                </button>
                            </div>
                        </div>
                        <form onSubmit={(e) => addToCart(e)} className="Product__text__specification flex flex-col sm:space-y-2 space-y-1">
                            <div className="flex justify-center sm:justify-start">
                                <p className="sm:text-[2rem]  text-[1.3rem] text-gray-900 mx-2 sm:text-left text-center" >
                                    {productDetails.productName}
                                </p>
                            </div>
                            <div className="ProductPrice mx-2 flex items-center justify-center sm:justify-start">
                                <span className="text-[#10b981] text-2xl">₹{productDetails.price} </span>
                                <span className="text-gray-500 text-base line-through mx-3">
                                    ₹{Math.round((+productDetails.price) * 100 / (+productDetails.fakeDiscount))}
                                </span>
                                <span className="text-rose-500 font-semibold text-lg">{productDetails.fakeDiscount} %OFF</span>
                            </div>

                            <div className="ExchangePrice__container flex flex-wrap sm:justify-start  justify-center">
                                <div className="withExchangePrice__container">
                                    <input onChange={() => console.log("clicked exchange")} className="hidden" id="withExchangePrice" type="radio" name="exchange" />
                                    <label onClick={() => setCartItem(prev => prev = { ...prev, productWithExchange: exchangeAmount })} className="radio withExchangePrice__container box-border m-2 border-gray-200 bg-gray-50 border h-16 w-60 flex items-center rounded-xl hover:border-green-500  text-left cursor-pointer" htmlFor="withExchangePrice">
                                        <Image
                                            className="mx-4 "
                                            loading="lazy"
                                            src={with_exchange}
                                            alt="Image is loading..."
                                            width={30}
                                            height={30}
                                        />
                                        <div className="withExchangePrice flex flex-col">
                                            <p className=" text-sm text-gray-700">WITH EXCHANGE</p>
                                            <p className="  text-xs text-gray-700">₹{productDetails.exchangeAmount}</p>
                                        </div>
                                    </label>
                                </div>
                                <div className="withoutExchangePrice__container">
                                    <input onChange={() => console.log("clicked exchange")} className="hidden" id="withoutExchangePrice" type="radio" name="exchange" checked />
                                    <label onClick={() => setCartItem(prev => prev = { ...prev, productWithExchange: 0 })} className="withoutExchangePrice__container radio box-border m-2 border-gray-200 bg-gray-50 border h-16 w-60 flex items-center rounded-xl hover:border-green-500  text-left cursor-pointer" htmlFor="withoutExchangePrice">
                                        <Image
                                            className="mx-4 "
                                            loading="lazy"
                                            src={with_exchange}
                                            alt="Image is loading..."
                                            width={30}
                                            height={30}
                                        />
                                        <div className="withExchangePrice flex flex-col">
                                            <p className=" text-sm text-gray-700">WITHOUT EXCHANGE</p>
                                            <p className="  text-xs text-gray-700">₹{productDetails.price}</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="TrolleyPrice__container flex flex-wrap sm:justify-start  justify-center">
                                <div className="withTrolleyPrice__container">
                                    <input onChange={() => console.log("clicked trolley")} className="hidden" id="withTrolleyPrice" type="radio" name="trolley" />
                                    <label onClick={() => setCartItem(prev => prev = { ...prev, productWithTrolley: trolleyPrice })} className="withExchangePrice__container radio box-border m-2 border-gray-200 bg-gray-50 border h-16 w-60 flex items-center rounded-xl hover:border-green-500 text-left cursor-pointer" htmlFor="withTrolleyPrice">
                                        <Image
                                            className="mx-4 "
                                            loading="lazy"
                                            src={with_exchange}
                                            alt="Image is loading..."
                                            width={30}
                                            height={30}
                                        />
                                        <div className="withExchangePrice flex flex-col">
                                            <p className=" text-sm text-gray-700">With Trolley</p>
                                            <p className=" text-xs text-gray-700">₹{productDetails.trolleyPrice}</p>
                                        </div>
                                    </label>
                                </div>
                                <div className="withoutTrolleyPrice__container">
                                    <input onChange={() => console.log("clicked trolley")} className="hidden" id="withoutTrolleyPrice" type="radio" name="trolley" checked />
                                    <label onClick={() => setCartItem(prev => prev = { ...prev, productWithTrolley: 0 })} className="withoutTrolleyPrice__container radio box-border m-2 border-gray-200 bg-gray-50 border h-16 w-60 flex items-center rounded-xl hover:border-green-500  text-left cursor-pointer" htmlFor="withoutTrolleyPrice" >
                                        <Image
                                            className="mx-4 "
                                            loading="lazy"
                                            src={with_exchange}
                                            alt="Image is loading..."
                                            width={30}
                                            height={30}
                                        />
                                        <div className="withTrolleyPrice flex flex-col">
                                            <p className=" text-sm text-gray-700">Without Trolley</p>
                                            <p className="  text-xs text-gray-700">₹{productDetails.price}</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            {/* todo */}
                            <div className="couponCode__container flex items-center justify-center sm:justify-start mx-2 !mb-4">
                                <Image
                                    className="w-8 h-8"
                                    loading="lazy"
                                    src={coupon}
                                    alt="Image is loading..."
                                    width={30}
                                    height={30}
                                />
                                <div className="flex items-center w-40 mx-3">
                                    <div className="inputcontianer relative">
                                        <input type="text" name="searchCoupon" id="searchCoupon" className="bg-gray-50 border border-green-500 rounded-full py-1 px-3 outline-none" />
                                        <p className="couponResult text-sm text-green-500 absolute -bottom-5 left-0">Coupon applied</p>
                                    </div>
                                    <button type="submit" className="border border-green-500 rounded-full py-1 px-3 mx-3 hover:bg-[#10b981] focus-within:bg-[#10b981] hover:text-white focus-within:text-white bg-gray-50 text-sm shadow-md ">Apply</button>
                                </div>
                            </div>
                            <div className="capacity__replacements flex flex-wrap justify-center sm:justify-start " >
                                <div className="capacity__dropdown box-border m-2 border-gray-200 bg-gray-50  border h-16 w-40 rounded-xl">
                                    <ProductCapacityDropDown cartItem={cartItem} capacityArray={cartItem.productCapacityArray} />
                                </div>
                                <div className="warranty box-border m-2 border-gray-200 bg-gray-50  border h-16 w-40 flex items-center rounded-xl">
                                    <Image
                                        className="mx-4 "
                                        loading="lazy"
                                        src={warranty}
                                        alt="Image is loading..."
                                        width={30}
                                        height={30}
                                    />
                                    <div className="flex flex-col">
                                        <p className=" text-sm text-gray-700">Warranty</p>
                                        <p className="  text-xs text-gray-700">{productDetails.warranty}</p>
                                    </div>
                                </div>
                                <div className="replacement box-border m-2 border-gray-200 bg-gray-50  border h-16 w-40 flex items-center rounded-xl">
                                    <Image
                                        className="mx-4 "
                                        loading="lazy"
                                        src={replacement}
                                        alt="Image is loading..."
                                        width={30}
                                        height={30}
                                    />
                                    <div className="flex flex-col">
                                        <p className=" text-sm text-gray-700">Replacement</p>
                                        <p className="  text-xs text-gray-700">{productDetails.replacementDuration}</p>
                                    </div>
                                </div>
                                <div className="rating box-border m-2 border-gray-200 bg-gray-50  border h-16 w-40 flex items-center rounded-xl">
                                    <Image
                                        className="mx-4 "
                                        loading="lazy"
                                        src={rating}
                                        alt="Image is loading..."
                                        width={30}
                                        height={30}
                                    />
                                    <div className="flex flex-col">
                                        <p className=" text-sm text-gray-700">Rating</p>
                                        <p className="  text-xs text-gray-700">{productDetails.rating}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="delivery__shareProduct flex flex-wrap gap-x-5 sm:gap-1 justify-center sm:justify-start">
                                <div className="delivery__citysm:space-y-6 space-y-2 my-3 mx-2">
                                    <p className="text-gray-900 text-lg sm:text-xl text-center">
                                        Select your city
                                    </p>
                                    <CheckDeliveryAvaibility cityArray={productDetails.city} cartItem={cartItem} setCartItem={setCartItem} />
                                </div>

                                <div className="share__products space-y-2 my-3 sm:mx-8 mx-2">
                                    <p className="text-gray-900 sm:text-xl text-lg">Share with your friends</p>
                                    <div className="flex space-x-2 justify-center sm:justify-start">
                                        <span className="bg-[#10b981] w-8 h-8 p-2 rounded-full">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="white"
                                                className="bi bi-instagram"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </span>
                                        <span className="bg-[#10b981] w-8 h-8 p-2 rounded-full">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="white"
                                                className="bi bi-facebook"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </span>
                                        <span className="bg-[#10b981] w-8 h-8 p-2 rounded-full">
                                            <svg

                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="white"
                                                className="bi bi-twitter"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </span>
                                        <span className="bg-[#10b981] w-8 h-8 p-2 rounded-full">
                                            <svg

                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="white"
                                                className="bi bi-linkedin"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                            </svg>
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div className="buynow__addtocart__buttons flex justify-center sm:justify-start">
                                <button onClick={(e) => buyNow(e)} className=" text-[#10b981] hover:text-gray-50  bg-gray-50 border hover:bg-[#10b981] border-[#10b981] rounded-full w-28 h-9 mx-2">
                                    Buy Now
                                </button>
                                <button type="submit" className=" text-[#10b981] hover:text-gray-50  bg-gray-50 border hover:bg-[#10b981] border-[#10b981] rounded-full w-28 h-9 mx-2">
                                    Add to cart
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="Product__description mx-4 sm:mx-16 my-8">
                        <p className="sm:text-[2rem]  text-[1.3rem] font-semibold">Description</p>
                        <p className="text-sm sm:text-base">{productDetails.productDescription}</p>
                    </div>
                    <div className="Product__features mx-4 sm:mx-16 my-8">
                        <p className="sm:text-[2rem]  text-[1.3rem] font-semibold" >Features</p>
                        {
                            productDetails.features.map((it, idx) => <p key={idx} className="text-sm sm:text-base">{it}</p>)
                        }
                    </div>
                    <div className="Product__table__specification mx-4 sm:mx-16 my-8 ">
                        <p className="sm:text-[2rem]  text-[1.3rem] font-semibold mb-4">Specifications</p>
                        {
                            productDetails.specifications.map((item, idx) =>
                                <div key={idx} className="flex justify-between max-[900px]:w-[80vw]  w-[54vw] border-x-2 border-t-2 border-gray-200 p-2">
                                    <p className="text-xs sm:text-base">{item.specificationName}</p>
                                    <p className="text-xs sm:text-base">{item.specificationValue}</p>
                                </div>
                            )
                        }
                    </div>
                </div >
                : <p className="text-center text-sm">Loading...</p>
            }
        </div >
    );
};

export default Productdetailsview;
