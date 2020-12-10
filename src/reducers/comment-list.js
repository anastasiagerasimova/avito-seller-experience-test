const updateCommentList = (state, action) => {
    if(state === undefined){
        return{
            comments: [], 
            commentsLoading: true, 
            commentsError: false
        }
    }
    switch(action.type){
        case 'FETCH_COMMENTS_REQUEST':
            return {
                comments: [],
                commentsLoading: true,
                commentsError: null
        }
        case 'FETCH_COMMENTS_SUCCES':
            return {
                comments: action.payload.filter(comment => comment.deleted !== true),
                commentsLoading: false,
                commentsError: null
        }
        case 'FETCH_COMMENTS_FAILURE':
            return {
                comments: [],
                commentsLoading: false,
                commentsError: action.payload
        }
        default:
            return state.commentList
    }
}

export default updateCommentList