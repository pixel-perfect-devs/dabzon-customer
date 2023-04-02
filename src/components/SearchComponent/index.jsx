import React from 'react'
import SortByDropdown from './SortByDropdown/index'
import FilterDropdown from './FilterDropdown/index'

const index = () => {

  let filtersItems = ['Low to high', '12 months', 'luminous', 'solar', 'exid']

  return (
    <div className="serachComponents my-8">
      <div className="searchComponents__container max-w-7xl mx-auto px-[3vw]">
        <div className='searchComponents__filter__sort flex flex-col text-center gap-3 sm:flex-row sm:justify-between mb-2 md:mb-0' >
          <div className='heading space-x-2'>
            <span className='text-lg sm:text-2xl font-semibold'>Search results for</span>
            <span className='text-lg sm:text-2xl text-gray-500 '>"Battery"</span>
          </div>
          <div className='dropdown_buttons '>
            <FilterDropdown />

            <SortByDropdown />
          </div>
        </div>
        <div className="searchComponents__filters flex gap-2 text-sm justify-center md:justify-start">
          <span className="filters__item px-3 py-1 border border-gray-400 bg-green-500 rounded-3xl text-white ">All</span>
          <span className="filters__item px-3 py-1 border border-gray-400 bg-gray-50 rounded-3xl ">{filtersItems[0]}</span>
          <span className="filters__item px-3 py-1 border border-gray-400 bg-gray-50 rounded-3xl ">{filtersItems[1]}</span>
          <span className={`${ filtersItems.length-2 < 1 ? 'hidden' : 'block'} filters__item px-3 py-1 border border-gray-400 bg-gray-50 rounded-3xl `}>+{filtersItems.length-2}</span>
        </div>
      </div>
    </div>
  )
}

export default index