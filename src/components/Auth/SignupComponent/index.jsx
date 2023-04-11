import React, { useState } from "react";
import Image from "next/image";
import signup_bg from "../../../../public/auth/signup_bg.svg";
import Link from "next/link";

const Index = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const [message, setMessage] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    //validating
    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const paswdRegexp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    if (/^[a-zA-Z]/.test(userData.name)) {
      if (emailRegexp.test(userData.email)) {
        if (paswdRegexp.test(userData.password)) {
          if (userData.password === userData.confirmPassword) {
              // if entered data is correct
              setMessage("")
              delete userData.confirmPassword;
              const res= await fetch(`${process.env.NEXT_PUBLIC_CUSTOMER_HOST}/api/user/signup`,{
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
              });
              const data=await res.json();
              if(data.msg === "user is already present"){
                alert("you are already resgistered");
              }
          }
          else {
            setMessage("passwrod and confirm password should be same");
          }
        }
        else {
          setMessage("Enter a password between 7 to 15 characters which contain at least one numeric digit and a special character")
        }
      }
      else {
        setMessage("Enter correct email");
      }
    }
    else {
      setMessage("Enter Name Correctly")
    }
  }
  return (
    <div className="flex items-center justify-evenly min-h-screen bg-gray-100 flex-wrap py-16">
      <Image className="m-2 hidden md:block" src={signup_bg} alt="Image is loading..."
        width={445}
        height={445}
      />
      <div className="flex flex-col items-center justify-center min-w-[300px] space-y-8 ">
        <div className="customer__heading ">
          <p className="font-semibold text-2xl text-gray-900">
            Create Account
          </p>
          <p className="text-[#111827] text-base opacity-60">
            Create an account to continue
          </p>
        </div>
        <div className="customer__info space-y-2 text-base ">
          <div>
            <p className="max-w-[300px] text-[#f71a06ef] text-[1rem] flex">{message}</p>
          </div>
          <div className="customer__name flex flex-col">
            <label
              className="text-gray-900 "
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              onChange={(e) => setUserData((prev) => prev = { ...prev, name: e.target.value })}
              className="border-gray-300 border rounded-md p-2 outline-0 bg-transparent w-[300px] "
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className=" customer__email flex flex-col ">
            <label
              className="text-gray-900 "
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              onChange={(e) => setUserData((prev) => prev = { ...prev, email: e.target.value })}
              className="border-gray-300 border rounded-md p-2 outline-0  bg-transparent w-[300px] "
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email..."
              required
            />
          </div>
          <div className="customer__password flex flex-col space-y-2">
            <label className="text-gray-900 " htmlFor="password" >Your password</label>
            <input
              onChange={(e) => setUserData((prev) => prev = { ...prev, password: e.target.value })}
              className="border-gray-300 border rounded-md p-2 outline-0 bg-transparent w-[300px] " type="password" id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <input
              onChange={(e) => setUserData((prev) => prev = { ...prev, confirmPassword: e.target.value })}
              className="border-gray-300 border rounded-md p-2 outline-0 bg-transparent w-[300px]"
              type="password"
              id="cpassword"
              name="cpassword"
              placeholder="Confirm Password"
              required
            />

            <div className=" text-[#6b707a]">
              <span className=" text-xs cursor-pointer ">
                <Link href='/utility/forgetpassword' >
                  Forget password
                </Link>
              </span> |
              <span className=" text-xs cursor-pointer">
                <Link href='/auth/login' > Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="buttons__container flex flex-col items-center">
          <button onClick={(e) => handleSubmit(e)} className="bg-[#10B981] text-white w-56 rounded-full h-9 mt-5 shadow-2xl"
            type="button"
          >
            Create
          </button>
          <p className="opacity-60 text-[0.8rem] my-[1rem]">OR</p>
          <div className="flex gap-3">
            <span className="auth__icon bg-[#10b981] cursor-pointer rounded-full p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </span>
            <span className="auth__icon bg-[#10b981] cursor-pointer rounded-full p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
              </svg>
            </span>
            <span className="auth__icon bg-[#10b981] cursor-pointer rounded-full p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </span>
          </div>
        </div>
        <p className="opacity-60 text-[0.8rem] my-12 flex gap-3">
          <Link href='/utility/privacypolicy'>Privacy & policy</Link>
          <span>|</span>
          <Link href='/utility/terms'>Term & Condition</Link>
        </p>
      </div>
    </div>
  );
};

export default Index;
