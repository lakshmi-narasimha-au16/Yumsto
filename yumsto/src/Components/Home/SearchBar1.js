import React from 'react'
import './styles/SearchBar1.scss'
import { connect } from 'react-redux'
import { SearchResults,SearchTerm,ItemDetailBulk } from '../../Store/Actions/homeActions'
import { withRouter } from 'react-router-dom'

class SearchBar extends React.Component{
    constructor(){
        super()
        this.state={
            query:'',
            suggestions:[],
            selectedQuery:'',
            selected:false,
            clear:'inputClear1',
            suggestionsUl:'suggestionsUl'
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside)
    }
    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
          this.setState({...this.state, suggestionsUl:'suggestionsHide', suggestions:[]})
        }
    }

    searchQuery= async (e) => {
        await this.setState({...this.state, query:e.target.value, selected:false})
        if (this.state.query===''){
            this.setState({
                ...this.state, suggestions:[]
            })
        }
        else{
            await this.props.dispatch(SearchResults(this.state.query))
            this.setState({...this.state, suggestions:await this.props.searchresults.results})
        }
        
        if (this.state.suggestions.length===0){
            this.setState({...this.state,suggestionsUl:'suggestionsUlHide'})
        }
        else{
            this.setState({...this.state, suggestionsUl: 'suggestionsUl'})
        }
    }

    suggestions = () => {
        const items = this.state.suggestions.slice(0,5)
        return items.map((item, idx)=>{
            return (
                <li key={item.id} value={idx}>{item.title} <img src={item.image} alt=" " /></li>
            )
        })
    }

    clearInput= () => {
        this.setState({...this.state, query:'', selected:false, selectedQuery:'', clear:'inputClear1',suggestionsUl:'suggestionsUl'})
    }

    suggestionSelected = async (e) => {
        await this.setState({
            ...this.state, 
            selectedQuery:this.state.suggestions[e.target.value].title, 
            selected:true, 
            clear:'inputClear'
        })
        this.setState({
            ...this.state, 
            suggestions:[], 
            query:this.state.selectedQuery
        })
    }

    searchTermDispatcher= async () => {
        await this.props.dispatch(SearchTerm(this.state.query))
        await this.props.dispatch(SearchResults(this.state.query))
        const bulk=[]
        for (let i of this.props.searchresults.results){
            bulk.push(i.id)
        }
        this.props.dispatch(ItemDetailBulk(bulk))
        this.props.history.push('/searchresults')
    }

    componentWillUnmount = () => {
        if (this.props.searchresults){
            const bulk=[]
            for (let i of this.props.searchresults.results){
                bulk.push(i.id)
            }
            this.props.dispatch(ItemDetailBulk(bulk))
        }
        
    }

    render(){
        if(this.state.selected || this.state.query===''){
            return(
                <div className='searchBar'>
                    <input type="text" className='searchInput' value={this.state.selectedQuery} onChange={this.searchQuery}/>
                    
                    <span className='searchImg'>
                        <img src="./images/home/search.png" alt="search" />
                    </span>
                    <span className={this.state.clear} onClick={this.clearInput}>&#10005;</span>
                </div>
            )
        }
        else{
            return(
            <div className='searchBar' >
                <input type="text" className='searchInput' value={this.state.query} onChange={this.searchQuery}/>
                <span className='searchImg' onClick={this.searchTermDispatcher}>
                    <img src="./images/home/search.png" alt="search" />
                </span>
                <span className='inputClear' onClick={this.clearInput}>&#10005;</span>
                <ul ref={this.setWrapperRef} className={this.state.suggestionsUl} onClick={this.suggestionSelected}>
                    {this.suggestions()}
                </ul>
            </div>
        )
        }
    }
}


const mapStateToProps=(state)=>{
    return{
        searchresults: state.home_reducer.searchResults
    }
}
export default connect(mapStateToProps)(withRouter(SearchBar))