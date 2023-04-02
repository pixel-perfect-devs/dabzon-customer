import React from "react";
import NavBar from "../../src/components/NavBar/index";
import Footer from "../../src/components/FooterComponents/index";

import battery from "../../public/battery.png";
import capacity from "../../public/productdetailsview/capacity.png";
import coupon from "../../public/productdetailsview/coupon.png";
import rating from "../../public/productdetailsview/rating.png";
import replacement from "../../public/productdetailsview/replacement.png";
import warranty from "../../public/productdetailsview/warranty.png";
import with_exchange from "../../public/productdetailsview/with_exchange.png";
import without_exchange from "../../public/productdetailsview/without_exchange.png";
import TopSellingBatteriesCard from "../../src/components/LandingPageComponents/TopSellingBatteries/TopSellingBatteriesCard/index";
import Image from "next/image";
const Productdetailsview = ({ title }) => {
  return (
    <div>
      <NavBar />
      <div className="flex my-8 mx-[7vw] space-x-4">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#10b981" className="bi bi-house-door sm:h-6 sm:w-6" viewBox="0 0 16 16">
            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
          </svg>
        </span>
        <span className="sm:text-base text-xs">
          &#62;
        </span>
        <span className="text-[#10b981] sm:text-base text-xs">
          Battery
        </span>
        <span className="sm:text-base text-xs">
          &#62;
        </span>
        <span className="sm:text-base text-xs ">
          Luminious power 2089 watt inverter battery
        </span>
      </div>
      <div className="flex justify-center flex-wrap ">
        {/*..............upper left portion start here.................... */}
        <div className="flex flex-col ">
          <div className="border-2 bg-gray-200 border-gray-200  rounded-xl m-2">
            <div className="bg-gray-200 rounded-t-xl">
              <div className="flex justify-between pt-4 px-4">
                <div className="border-[1px] text-[#10b981] border-green-500 rounded-full text-[12px] p-[5px] w-[102px] h-[30px] text-center">
                  Car Battery
                </div>

              </div>
              <Image

                className="pb-2 w-[300px] lg:w-[510px] sm:w-[440px]"
                loading="lazy"
                src={battery}
                width={600}
                height={600}
                alt="Image is loading..."
              />
            </div>
            <div className="flex justify-center items-center w-[6.5rem] h-[30px] border-rose-500 bg-gray-50 border-[1px] rounded-full ml-4 mb-4">
              <p className="flex text-[12px] text-rose-500  ">
                Stock Available
              </p>
            </div>
          </div>
          <div className="flex m-2  space-x-1 justify-between ">
            <Image
              className="py-6 w-[95px] lg:w-[163px] sm:w-[145px] bg-gray-200 rounded-xl"
              loading="lazy"
              src={battery}
              width={170}
              height={170}
              alt="Image is loading..."
            />
            <Image
              className="py-6 w-[95px] lg:w-[163px] sm:w-[145px] bg-gray-200 rounded-xl"
              loading="lazy"
              src={battery}
              width={170}
              height={170}
              alt="Image is loading..."
            />
            <Image
              className="py-6 w-[95px] lg:w-[163px] sm:w-[145px] bg-gray-200 rounded-xl"
              loading="lazy"
              src={battery}
              width={170}
              height={170}
              alt="Image is loading..."
            />
          </div>
        </div>

        {/*..............upper left portion end here.................... */}
        <div className="flex flex-col sm:space-y-6 space-y-4">
          <div className="flex justify-center sm:justify-start">
            <p className="sm:text-[2rem]  text-[1.3rem] text-gray-900 mx-2 sm:text-left text-center" >
              Luminous power 2089 watt inverter battery
            </p>
          </div>

          <div className="mx-2 flex justify-center sm:justify-start">
            <span className="text-[#10b981] text-2xl">₹400.00 </span>
            <span className="text-gray-500 text-base line-through mx-3">
              ₹4000.00
            </span>
            <span>80 %OFF</span>
          </div>

          <div className="flex flex-wrap sm:justify-start  justify-center">
            <div className="box-border m-2 border-gray-200 bg-gray-50  border h-16 w-60 flex items-center rounded-xl">
              <Image
                className="mx-4 "
                loading="lazy"
                src={with_exchange}
                alt="Image is loading..."
                width={30}
                height={30}
              />
              <div className="flex flex-col">
                <p className=" text-sm text-gray-700">WITH EXCHANGE</p>
                <p className="  text-xs text-gray-700">₹400</p>
              </div>
            </div>

            <div className="box-border m-2  border-gray-200 bg-gray-50  border h-16 w-60 flex items-center rounded-xl">
              <Image
                className="mx-4 "
                loading="lazy"
                src={without_exchange}
                alt="Image is loading..."
                width={30}
                height={30}
              />
              <div className="flex flex-col ">
                <p className=" text-sm text-gray-700">WITHOUT EXCHANGE</p>
                <p className="  text-xs text-gray-700">₹4000</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start mx-2">
            <Image
              className="w-8 h-8"
              loading="lazy"
              src={coupon}
              alt="Image is loading..."
              width={30}
              height={30}
            />
            <div className="flex flex-col w-40 mx-3">
              <p className="text-gray-700 text-base">DABZON20</p>
              <p className="text-gray-700 text-[13px]  border-l-emerald-50 leading-0">
                Use this coupon to get flat 20% OFF on selected items T&C apply
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start " >
            <div className="box-border m-2 border-gray-200 bg-gray-50  border h-16 w-40 flex items-center rounded-xl">
              <Image
                className="mx-4 "
                loading="lazy"
                src={capacity}
                alt="Image is loading..."
                width={30}
                height={30}
              />
              <div className="flex flex-col">
                <p className=" text-sm text-gray-700">capacity</p>
                <p className="  text-xs text-gray-700">15AH</p>
              </div>
            </div>
            <div className="box-border m-2 border-gray-200 bg-gray-50  border h-16 w-40 flex items-center rounded-xl">
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
                <p className="  text-xs text-gray-700">26 Months</p>
              </div>
            </div>
            <div className="box-border m-2 border-gray-200 bg-gray-50  border h-16 w-40 flex items-center rounded-xl">
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
                <p className="  text-xs text-gray-700">10 days</p>
              </div>
            </div>
            <div className="box-border m-2 border-gray-200 bg-gray-50  border h-16 w-40 flex items-center rounded-xl">
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
                <p className="  text-xs text-gray-700">4.5</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-start">

            <div className="sm:space-y-6 space-y-2 my-3 mx-2">
              <p className="text-gray-900 text-lg sm:text-xl text-center">
                Check Delivery Avaibility
              </p>
              <select
                className="rounded-full w-60 h-10 bg-gray-200 text-center "
                id="states"
                name="statelist"
                form="stateform"
              >
                <option value="volvo">Kolkata</option>
                <option value="saab">Banglore</option>
                <option value="opel">Delhi</option>
                <option value="audi">Mumbai</option>
              </select>
            </div>

            <div className=" sm:space-y-6 space-y-2 my-3 sm:mx-8 mx-2">
              <p className="text-gray-900 sm:text-xl text-lg">Share with your friends</p>
              <div className="flex space-x-2">
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
          <div className="flex justify-center">
            <button className="text-xs text-[#10b981] hover:text-gray-50  bg-gray-50 border-2 hover:bg-[#10b981] border-[#10b981] rounded-full w-28 h-9 mx-2">
              Buy Now
            </button>
            <button className="text-xs text-[#10b981] hover:text-gray-50  bg-gray-50 border-2 hover:bg-[#10b981] border-[#10b981] rounded-full w-28 h-9 mx-2">
              Go To Cart
            </button>
          </div>
        </div>
      </div>

      {/* ........................................................... */}
      <div className="mx-4 sm:mx-16 my-8">
        <p className="sm:text-[2rem]  text-[1.3rem] font-semibold">Description</p>
        <p className="text-sm sm:text-base">Exide INVAHOMZ IHST1500 150AH inverter battery is new launched battery by Exide Industeries for (Pocket friendly) developed with the most advanced technology. The spines which form the backbone of the positive plate are cast under high presssure from low antimony less alloy with selenium, copper, tin, silver and arsenic, to protect the lead support from anodic corrosion, ensuring long battery life. High heat tolerance capacity of the Exide INVAHOMZ short tubular IHST1500 150AH Short tubular inverter battery makes it perfect for Indian weather conditions. Exide uses high heat technology, premium alloys for a low-corrosion. Exide INVAHOMZ IHST1500 150AH inverter battery is worth for Money spent because it can give 5-6 Hours Backup on 300 – 250 watts Load This battery is best suitable for upto 2, 2.5 and 3 BHK Flats where power cut upto maximum 4 hours continously occurs. Dimension of Exide INVAHOMZ short tubular IHST1500 150AH battery is (L*W*H) (530*240*320) mm.</p>
      </div>
      <div className="mx-4 sm:mx-16 my-8">
        <p className="sm:text-[2rem]  text-[1.3rem] font-semibold" >Note</p>
        <p className="text-sm sm:text-base">If you are planning for 150 AH battery try EXIDE INVAHOMZ IHST1500 - 150AH battery is best suitable and under 24 months full replacement warranty out of 48 months. Back is same as other 150AH batteries</p>
      </div>
      <div className=" mx-4 sm:mx-16 my-8">
        <p className="sm:text-[2rem]  text-[1.3rem] font-semibold" >Features</p>
        <p className="text-sm sm:text-base">• Advanced Tubular Battery Single water indicater </p>
        <p className="text-sm sm:text-base">• High resistance to heat makes the battery perfect for Indian weather conditions.</p>
      </div>
      <div className=" mx-4 sm:mx-16 my-8 ">
        <p className="sm:text-[2rem]  text-[1.3rem] font-semibold mb-4">Specifications</p>
        <div className="flex justify-between max-[900px]:w-[80vw]  w-[54vw] border-x-2 border-t-2 border-gray-200 p-2">
          <p className="text-xs sm:text-base">Net Weight</p>
          <p className="text-xs sm:text-base">27kg</p>
        </div>
        <div className="flex justify-between max-[900px]:w-[80vw]  w-[54vw] border-x-2 border-t-2 border-gray-200 p-2">
          <p className="text-xs sm:text-base">Battery Layout</p>
          <p className="text-xs sm:text-base">Left</p>
        </div>
        <div className="flex justify-between max-[900px]:w-[80vw]  w-[54vw] border-x-2 border-t-2 border-gray-200 p-2">
          <p className="text-xs sm:text-base">Capacity</p>
          <p className="text-xs sm:text-base">47 Kg</p>
        </div>
        <div className="flex justify-between max-[900px]:w-[80vw]  w-[54vw] border-x-2 border-t-2 border-gray-200 p-2">
          <p className="text-xs sm:text-base">Technology</p>
          <p className="text-xs sm:text-base">Advance Tubular</p>
        </div>
        <div className="flex justify-between max-[900px]:w-[80vw]  w-[54vw] border-2 border-gray-200 p-2">
          <p className="text-xs sm:text-base">Model</p>
          <p className="text-xs sm:text-base">Luminous  INVAHOMZ IHST1500</p>
        </div>

      </div>

      <div>
        <p className="text-gray-900 lg:text-4xl sm:text-3xl  text-2xl font-bold
        mb-5 text-center">Recommended for you</p>
        <div className='flex flex-wrap justify-center gap-6 my-4'>
          {[0, 0, 0, 0, 0, 0, 0, 0].map((it, idx) => <TopSellingBatteriesCard key={idx} id={idx} />)}
        </div>
        {/* <div className='flex justify-center flex-wrap mx-7'>
      <div className="m-4">
         <Card/>
      </div>
      <div className="m-4">
        <Card/>
      </div>
      <div className="m-4">
        <Card/>
      </div>
      <div className="m-4">
        <Card/>
      </div>
      <div className="m-4">
        <Card/>
      </div>
      <div className="m-4">
        <Card/>
      </div>
      <div className="m-4">
        <Card/>
      </div>
      <div className="m-4">
        <Card/>
      </div>

    </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Productdetailsview;
