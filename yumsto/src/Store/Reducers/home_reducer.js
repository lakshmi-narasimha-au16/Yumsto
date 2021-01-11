const home_reducer= (state={}, action)=>{
    switch (action.type) {
        case 'SEARCH':
            return{...state,searchResults:action.payload}
        
        case 'SEARCH_TERM':
            return {...state, searchTerm:action.payload}
        
        case 'HOMEPAGEFILTERS':
            return {...state, apiDataStore:action.payload}

        default:
            return state
    }
}
export default home_reducer