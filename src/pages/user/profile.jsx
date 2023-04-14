import React from 'react'
import NavBar from '../../components/NavBar/index'
import FooterComponents from '../../components/FooterComponents/index'

const Profile = () => {
  return (
    <div className='profile bg-blue-50'>
      <NavBar />
      <div className='profile__container max-w-7xl mx-auto px-[4vw] my-3'>
        <div className="profile__left">
          {/* copy paste your navbar here */}
        </div>
        <div className="profile__right"></div>
      </div>
      <div className="footer hidden sm:block">
        <FooterComponents />
      </div>
    </div>
  )
}

export default Profile