import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/index";
import FooterComponents from "../../components/FooterComponents/index";
import AccountNav from "../../components/Account/AccountNav/Index";
import Hello from "../../components/Account/Hello/Index";
import MyOrder from "../../components/Account/MyOrder/Index";

const Profile = () => {
 
  const [right, setRight] = useState(1);

  useEffect(() => {
    if(window.innerWidth <= 768){
      setRight(9);
    }
  }, []);

  return (
    <div className="profile">
      <NavBar />
      <div className="profile__container max-w-7xl mx-auto  my-3 flex justify-center">
        <div className="profile__left md:block hidden">
          <AccountNav setRight={setRight} />
        </div>

        {(() => {
          switch (right) {
            case 1:
              return (
                <div className="profile__right w-[18rem] sm:w-[30rem] md:w-[39rem]">
                  <Hello setRight={setRight}/>
                </div>
              );
            case 2:
              return (
                <div className="profile__right w-[30rem] md:w-[39rem]">
                  <MyOrder setRight={setRight}/>
                </div>
              );
            default:
              return (
                <div className="profile__left mb-20">
                  <AccountNav setRight={setRight} />
                </div>
              );
          }
        })()}
      </div>
      <div className="footer hidden sm:block">
        <FooterComponents />
      </div>
    </div>
  );
};

export default Profile;
