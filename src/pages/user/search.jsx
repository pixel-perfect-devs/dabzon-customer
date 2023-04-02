import React from 'react'
import NavBar from '../../components/NavBar/index'
import FooterComponents from '../../components/FooterComponents/index'
import SearchComponent from '../../components/SearchComponent/index'

const Search = () => {
  return (
    <div className='Search'>
      <NavBar />
      <SearchComponent />
      <FooterComponents />
    </div>
  )
}

export default Search