import { BrowserRouter,Route } from 'react-router-dom'
import Home from './Home'

const Routes= ()=>{
    return(
        <BrowserRouter>
            <Route path={'/'} exact component={Home} />
        </BrowserRouter>
    )
    
}
export default Routes