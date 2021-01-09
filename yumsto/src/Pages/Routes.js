import { BrowserRouter,Route } from 'react-router-dom'
import Home from '../Components/Home/Home_Details'

const Routes= ()=>{
    return(
        <BrowserRouter>
            <Route path={'/'} exact component={Home} />
        </BrowserRouter>
    )
    
}
export default Routes