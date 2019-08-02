import React from 'react'
import './SearchBox.styles.css'

const SearchBox = ({placeholder, handleChange}) => {
   return(
   <input
      type="search"
      placeholder={placeholder}
      className="search"
      onChange={handleChange}
   />
   )
}

export default SearchBox