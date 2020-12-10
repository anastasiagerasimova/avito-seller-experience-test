import updateNewsList from './news-list'
import updateCommentList from './comment-list'
import updateSelectedStory from './selected-story'

const reducer = (state, action) => {
    return {
        newsList: updateNewsList(state, action),
        commentList: updateCommentList(state, action),
        selectedStory: updateSelectedStory(state, action)
    }

}

export default reducer