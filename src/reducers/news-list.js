const updateNewsList = (state, action) => {
    if(state === undefined){
        return{
            stories: [], 
            storiesLoading: true, 
            storiesError: false
        }
    }

    switch(action.type){
        case 'FETCH_NEWSTORIES_REQUEST':
            return {
                stories: [],
                storiesLoading: true,
                storiesError: null
            }
        case 'FETCH_NEWSTORIES_SUCCES':
            return {
                stories: action.payload,
                storiesLoading: false,
                storiesError: null
            }
        case 'FETCH_NEWSTORIES_FAILURE':
            return {
                stories: [],
                storiesLoading: false,
                storiesError: action.payload
            }
        default: 
            return state.newsList
    }
}

export default updateNewsList