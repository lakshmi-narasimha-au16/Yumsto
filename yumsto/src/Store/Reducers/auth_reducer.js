const auth_reducer = (state={}, action)=>{
    switch (action.type) {
        case "USERDATA":
            return{
                ...state, userdata:action.payload
            }
        case "ISLOGGEDIN":
            return{
                ...state, is_authenticated:action.payload
            }
    
        default:
            return state
    }
}
export default auth_reducer