import React from 'react'
import SearchBar from '../Components/Home/SearchBar1'
import HomeDetail from '../Components/Home/Home_Details'
import "./styles/Home.scss"
import Navigation from "../Components/Navigation"

const Home = ()=>{
    const bgStyle = { 
        backgroundImage: `url(${process.env.PUBLIC_URL + './images/home/header-bg.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover',
        backgroundAttachment: 'fixed',
        width:"100%",
        height: '50vh',
    }

    return(
        <React.Fragment>
            <header style={bgStyle}>
                <Navigation />
                <div className="searchBar">
                    <h1>Search Recipes</h1>
                    <SearchBar />
                </div>
                
            </header>
            <main>
                <HomeDetail className="homeContent"/>
            </main>
            
        </React.Fragment>
    )
    
}
export default Home