import React from 'react'
import { connect } from 'react-redux'
import SearchResultCard from './SearchResultCard'
import { SearchResults, ItemDetailBulk } from '../../Store/Actions/homeActions'
import './styles/SearchResultsDisplay.scss'


class SearchResultsDisplay extends React.Component{
    searchResultsRenderer = ()=>{
        if(this.props.searchResults){
            if(this.props.searchResults.results){
                if (this.props.searchResults.results.length===0){
                return(
                    <div>No results found</div>
                )
                }
                else{
                    const arr = this.props.searchResults.results
                    if(this.props.itemDetailBulk){
                        const detail = this.props.itemDetailBulk
                            return arr.map((item, idx) => {
                                return(
                                <SearchResultCard  key={idx} item={item} details= {detail[idx]}/>
                                )
                            })
                    } 
                }
            }   
        }
        else{
            return(
                <div>Search For recipes</div>
            )
        }
    }
    
    

    loadMore = async ()=>{
        const offset = this.props.searchResults.offset+this.props.searchResults.number
        await this.props.dispatch(SearchResults(`${this.props.searchterm}&offset=${offset}&number=20`))
        const bulk=[]
        for (let i of this.props.searchResults.results){
            bulk.push(i.id)
        }
        this.props.dispatch(ItemDetailBulk(bulk))
    }

    render(){
        return(
            <div>
                <div className='searchResultCards'>
                    {this.searchResultsRenderer()}
                </div>
                
                <button onClick={this.loadMore} className='loader'>Load More Results</button>
            </div>
        )
    }
    
}

const mapStateToProps = (state)=>{
    return{
        searchResults:state.home_reducer.searchResults,
        searchterm: state.home_reducer.searchTerm,
        itemDetailBulk:state.search_reducer.itemDetailBulk
    }
}

export default connect(mapStateToProps)(SearchResultsDisplay)