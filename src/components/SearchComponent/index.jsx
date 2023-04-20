import React from 'react'
import SortByDropdown from './SortByDropdown/index'
import FilterDropdown from './FilterDropdown/index'
import TopSellingBatteriesCard from '../LandingPageComponents/TopSellingBatteries/TopSellingBatteriesCard'
import { useDispatch, useSelector } from 'react-redux'

const index = ({ searchQuery, searchResults }) => {

  const [filters, setFilters] = React.useState([]);
  const [filteredItems, setFilteredItems] = React.useState([]);
  const [sort, setSort] = React.useState("Low to high");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);
  // console.log(filteredItems)

  const resetFilters = () => {
    setFilters([]);
    setFilteredItems(searchResults);
  }

  const applyFilters = () => {
    // apply all filters[] to filteredItems and set it to filteredItems
    let temp = filteredItems;
    if (filters.length > 0) {
      filters.forEach((filter) => {
        temp = temp.filter((item) => item.productBrand === filter || item.productCategory === filter || item.warranty === filter);
      });
      setFilteredItems(temp);
    }
  }

  React.useEffect(() => {
    setFilteredItems(searchResults);
  }, [searchResults]);

  React.useEffect(() => {
    let tempItems = [...searchResults];
    if (sort === "Low to high") {
      tempItems = tempItems.sort((a, b) => a.price - b.price);
    } else if (sort === "High to low") {
      tempItems = tempItems.sort((a, b) => b.price - a.price);
    }
    // if (sort === "Popularity") {
    //   tempItems = tempItems.sort((a, b) => b.rating - a.rating);
    // }
    setFilteredItems(tempItems);
  }, [sort])

  return (
    <div className="serachComponents my-8">
      <div className="searchComponents__container max-w-7xl mx-auto px-[3vw] flex flex-col gap-3">
        <div className='searchComponents__filter__sort flex flex-col text-center gap-3 sm:flex-row sm:justify-between mb-2 md:mb-0' >
          {searchQuery
            ? <div className='heading space-x-2'>
              <span className='text-lg sm:text-2xl font-semibold'>Search results for</span>
              <span className='text-lg sm:text-2xl text-gray-500 '>"{searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)}"</span>
            </div>
            : <p className='search__recommendation text-lg sm:text-2xl text-gray-500'> Search some products... </p>
          }
          {searchResults.length > 0
            ? <div className='dropdown_buttons '>
              <FilterDropdown filteredItems={filteredItems} setFilters={setFilters} resetFilters={resetFilters} applyFilters={applyFilters} />

              <SortByDropdown setSort={setSort} />
            </div>
            : null
          }
        </div>
        {filteredItems.length > 0
          ? <div className="searchComponents__filters flex gap-2 text-sm justify-center md:justify-start">
            <span className="filters__item px-3 py-1 border border-gray-400 bg-dabgreen rounded-3xl text-white ">All</span>
            {filters[0] && <span className="filters__item px-3 py-1 border border-gray-400 bg-gray-50 rounded-3xl ">{filters[0]}</span>}
            {filters[1] && <span className="filters__item px-3 py-1 border border-gray-400 bg-gray-50 rounded-3xl ">{filters[1]}</span>}
            <span className={`${filters.length - 2 < 1 ? 'hidden' : 'block'} filters__item px-3 py-1 border border-gray-400 bg-gray-50 rounded-3xl `}>+{filters.length - 2}</span>
          </div>
          : null
        }

        <div className="searchResult__container my-6 flex justify-center items-center">
          {/* loader */}
          {!loading
            ? (filteredItems.length > 0
              ? <div className="searchResult__container__grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
                {filteredItems.map((item, idx) => <TopSellingBatteriesCard key={idx} item={item} />)}
              </div>
              : null)
            : <svg className="animate-spin h-12 w-12 mr-3 text-dabgreen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
            </svg>
          }
        </div>
      </div>
    </div>
  )
}

export default index