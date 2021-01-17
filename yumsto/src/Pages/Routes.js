import { BrowserRouter,Route } from 'react-router-dom'
import SearchResults from './SearchResults'
import LoginPage from '../Components/Auth/LoginPage'
import AddingMeal from '../Components/Add_Meal/lucky/Addmeal'
import Home from './Home'
import Detail from './Details'

const Routes= ()=>{
    return(
        <BrowserRouter>
            <Route path={'/'} exact component={Home} />
            <Route path={'/login'} exact component={LoginPage} />
            <Route path={'/mealplans'} exact component={AddingMeal} />
            <Route path={'/searchresults'} exact component={SearchResults} />
            <Route path={'/details/:id'} exact component={Detail} />
            
        </BrowserRouter>
    )
    
}
export default Routes