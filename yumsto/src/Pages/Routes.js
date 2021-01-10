import { BrowserRouter,Route } from 'react-router-dom'
import Home from './Home'
import SearchResults from './SearchResults'

const Routes= ()=>{
    return(
        <BrowserRouter>
            <Route path={'/'} exact component={Home} />
            <Route path={'/searchresults'} exact component={SearchResults} />
        </BrowserRouter>
    )
    
}
export default Routes