import React from 'react'
import NavBar from '../../components/NavBar/index'
import FooterComponents from '../../components/FooterComponents/index'

const Profile = () => {
  return (
    <div className='profile'>
      <NavBar />
      {/* my profile customer */}
      <h1>Profile</h1>
      <div className="footer hidden sm:block">
        <FooterComponents />
      </div>
    </div>
  )
}

export default Profile