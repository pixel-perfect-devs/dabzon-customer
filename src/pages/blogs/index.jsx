import React from 'react'
import BlogComponents from '../../components/BlogComponents/index'
import NavBar from '../../components/NavBar/index'
import FooterComponents from '../../components/FooterComponents/index'

const blogs = () => {
  return (
    <div className='blogs__page'>
        <NavBar />
        <BlogComponents source='blog' blogHeading="Blogs" />
        <FooterComponents />
    </div>
  )
}

export default blogs