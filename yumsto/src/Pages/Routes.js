import { BrowserRouter,Route } from 'react-router-dom'
import Home from './Home'
import SearchResults from './SearchResults'
import Details from './Details'
import Login from "./Login"
import AddMeal from "./Add_Meal"
const Routes= ()=>{
    return(
        <BrowserRouter>
            <Route path={'/'} exact component={Home} />
            <Route path={'/searchresults'} exact component={SearchResults} />
            <Route path={'/details/:id'} exact component={Details} />
            <Route path={'/login'} exact component={Login} /> 
            <Route path={'/addmeal'} exact component={AddMeal} />
        </BrowserRouter>
    )
    
}
export default Routes