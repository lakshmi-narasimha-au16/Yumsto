
import {Home_details_action} from "../Actions/main_action"

const home_details_store = {

    apiDataStore : ""


}



const home_details_reducer= (state, action)=>{

    state=state || home_details_store
    switch (action.type) {

        case Home_details_action.home_details_api_action:

        return{
                ...state,
            apiDataStore:action.payload
        }
        
    
        default:
            return state
    }
}

export default home_details_reducer