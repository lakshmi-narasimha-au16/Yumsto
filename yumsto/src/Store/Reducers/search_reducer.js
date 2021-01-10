const search_reducer = (state=[], action)=>{
    switch (action.type) {
        case 'ITEM_DETAILBULK':
            return {...state, itemDetailBulk:action.payload}
        default:
            return state
    }
}
export default search_reducer