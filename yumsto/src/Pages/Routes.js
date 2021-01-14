import { BrowserRouter,Route } from 'react-router-dom'
import SearchResults from './SearchResults'
import LoginPage from '../Components/Auth/LoginPage'
import AddingMeal from '../Components/Add_Meal/Add_Meal'
import Home from './Home'

const Routes= ()=>{
    return(
        <BrowserRouter>
            <Route path={'/'} exact component={Home} />
            <Route path={'/login'} exact component={LoginPage} />
            <Route path={'/addmeal'} exact component={AddingMeal} />
            <Route path={'/searchresults'} exact component={SearchResults} />
        </BrowserRouter>
    )
    
}
export default Routes