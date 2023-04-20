import React from 'react'
import BlogComponents from '../../components/BlogComponents/index'
import NavBar from '../../components/NavBar/index'
import FooterComponents from '../../components/FooterComponents/index'

const blogs = () => {
  return (
    <div className='blogs__page'>
      <NavBar />
      {/* <BlogComponents source='blog' blogHeading="Blogs" /> */}
      <div className="footer hidden sm:block">
        <FooterComponents />
      </div>
    </div>
  )
}

export default blogs