const initialState = {
    stories: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_NEWSTORIES_SUCCES':
            return {
                ...state,
                stories: action.payload
            }
        default:
            return state
    }
}

export default reducer