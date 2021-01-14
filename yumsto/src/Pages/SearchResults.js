import React from 'react'
import SearchBar from '../Components/Home/SearchBar1'
import SearchResultsDisplay from '../Components/Search/searchResultsDisplay'
import './styles/SearchResults.scss'
import Navigation from "../Components/Navigation"

const SearchResults= () => {
    const bgStyle = { 
        backgroundImage: `url(${process.env.PUBLIC_URL + './images/home/header-bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '50vh',
    }
    return (
        <React.Fragment>
            <header style={bgStyle}>
                <Navigation />
                <SearchBar className="searchBar"/>
            </header>
            <main>
                <h1>search results</h1>
                <SearchResultsDisplay />
            </main>
            
        </React.Fragment>
    )
}
export default SearchResults