import React from "react";
import Image from "next/image";
import profile from "../../../../public/avatar.png";
const Index = ({setRight}) => {
  return (
    <div className="flex flex-col border-2 bg-white rounded-xl p-6 mb-20 sm:mb-0 w-full relative">
      <button className="absolute left-2 top-2" onClick={()=>setRight(9)}>back</button>
      
      <div className="flex  items-center">
        <div className="w-24 h-24  mr-4">
          <Image
            className=" w-24 h-24 "
            loading="lazy"
            src={profile}
            alt="Image is loading..."
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col">
          <button className="text-xs text-gray-50 h-9 w-28 my-2 bg-dabgreen rounded-full">
            Change Photo
          </button>
          <button className="text-xs text-red-900 h-9 w-28 my-2 bg-red-200 rounded-full">
            Delete Photo
          </button>
        </div>
      </div>
      <p className="text-[0.55rem] mt-2 mb-4">
        For better result use 160 * 160px pic & we support jpg and png.
      </p>
      <div className=" Your___Name___  flex flex-col my-2">
        <label className="text-gray-900 text-sm" htmlFor="name">
          Your Name
        </label>
        <input
          className="border-gray-300 border rounded-md p-2 outline-0  bg-transparent w-[230px] md:w-[300px] text-sm"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name..."
          required
        />
      </div>
      <div className=" Mail___ flex flex-col my-2">
        <label className="text-gray-900 text-sm" htmlFor="mail">
          Your Mail
        </label>
        <input
          className="border-gray-300 border rounded-md p-2 outline-0  bg-transparent w-[230px] md:w-[300px] text-sm"
          type="email"
          id="mail"
          name="mail"
          placeholder="Enter your mail..."
          required
        />
      </div>
      <div className="Gender______  flex flex-col my-2">
        <label className="text-gray-900 text-sm" htmlFor="dropdown">
          Gender
        </label>
        <select
          className="border-gray-300 border rounded-md p-2 outline-0  bg-transparent w-[230px] md:w-[300px] text-sm"
          id="dropdown"
          name="dropdown"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className=" Mobile___Number flex flex-col my-2">
        <label className="text-gray-900 text-sm" htmlFor="number">
          Mobile Number
        </label>
        <input
          className="border-gray-300 border rounded-md p-2 outline-0  bg-transparent w-[230px] md:w-[300px] text-sm"
          type="number"
          id="number"
          name="number"
          placeholder="Enter your number..."
          required
        />
      </div>

      <div className=" Password___ flex flex-col my-2">
        <label className="text-gray-900 text-sm" htmlFor="password">
          Password
        </label>
        <input
          className="border-gray-300 border rounded-md p-2 outline-0  bg-transparent w-[230px] md:w-[300px] text-sm"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password..."
          required
        />
      </div>

      <div className="flex justify-center w-[230px] md:w-[300px]">
        <button
          className="bg-dabgreen text-white w-56 rounded-full h-9 mt-4 shadow-2xl"
          type="button"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Index;
