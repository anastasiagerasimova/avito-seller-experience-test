const storyLoaded = (story) => {
    return {
        type: 'FETCH_STORY_SUCCES',
        payload: story
    }
}

const storyRequested = () => {
    return {
        type: 'FETCH_STORY_REQUEST'
    }
}

const storyError = (error) => {
    return {
        type: 'FETCH_STORY_FAILURE',
        payload: error
    }
}

const newStoriesLoaded = (newStories) => {
    return {
        type: 'FETCH_NEWSTORIES_SUCCES',
        payload: newStories
    }
}

const newStoriesRequested = () => {
    return {
        type: 'FETCH_NEWSTORIES_REQUEST',
    }
}

const newStoriesError = (error) => {
    return {
        type: 'FETCH_NEWSTORIES_FAILURE',
        payload: error
    }
}

const commentsLoaded = (comments) => {
    return {
        type: 'FETCH_COMMENTS_SUCCES',
        payload: comments
    }
}

const commentsRequested = () => {
    return {
        type: 'FETCH_COMMENTS_REQUEST',
    }
}

const commentsError = (error) => {
    return {
        type: 'FETCH_COMMENTS_FAILURE',
        payload: error
    }
}

const fetchNewStories = (hackernewsService) => () => (dispatch) => {
    dispatch(newStoriesRequested())
    hackernewsService
        .getNewStories()
        .then(data => dispatch(newStoriesLoaded(data)))
        .catch(error => dispatch(newStoriesError(error)))
}

const fetchComments = (hackernewsService, selectedItemId) => () => (dispatch) => {
    dispatch(commentsRequested())
    hackernewsService
        .getComments(selectedItemId)
        .then((comments) => dispatch(commentsLoaded(comments)))
        .catch((error) => dispatch(commentsError(error)))
}

const fetchStory = (hackernewsService, selectedItemId) => () => (dispatch) => {
    dispatch(storyRequested())
    hackernewsService
        .getItem(selectedItemId)
        .then((story) => dispatch(storyLoaded(story)))
        .catch((error) => dispatch(storyError(error)))
}

export {
    fetchStory,
    fetchNewStories,
    fetchComments
}