import React from 'react'
import Search from '../Components/Home/SearchBar1'
import SearchResultsDisplay from '../Components/Search/searchResultsDisplay'
import './styles/SearchResults.scss'

const SearchResults= () => {
    return (
        <div className='searchResultsContainer'>
            <Search />
            <h1>search results</h1>
            <SearchResultsDisplay />
        </div>
    )
}
export default SearchResults
