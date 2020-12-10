const updateSelectedStory = (state, action) => {
    if(state === undefined){
        return {
            story: {}, 
            storyLoading: true,
            storyError: null,
        }
    }

    switch(action.type){
        case 'FETCH_STORY_REQUEST':
            return {
                story: {},
                storyLoading: true,
                storyError: null,
        }
        case 'FETCH_STORY_SUCCES':
            return {
                story: action.payload,
                storyLoading: false,
                storyError: null,
        }
        case 'FETCH_STORY_FAILURE':
            return {
                story: {},
                storyLoading: false,
                storyError: action.payload,
        }
        default: 
            return state.selectedStory
    }
}

export default updateSelectedStory