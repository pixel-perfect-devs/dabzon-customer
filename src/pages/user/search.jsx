import React from 'react'
import NavBar from '../../components/NavBar/index'
import FooterComponents from '../../components/FooterComponents/index'
import SearchComponent from '../../components/SearchComponent/index'

const Search = () => {
  return (
    <div className='Search'>
      <NavBar />
      <SearchComponent />
      <div className="footer hidden sm:block">
        <FooterComponents />
      </div>
    </div>
  )
}

export default Search