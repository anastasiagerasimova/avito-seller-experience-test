import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'

import {compose, convertTime} from '../../utils'
import {fetchStory} from '../../actions'
import {withHackernewsService} from '../hoc'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import './story-details.css'

const StoryDetails = ({story}) => {
    const {by, time, title, url, score, descendants} = story
    return (
        <div className="story-details">
            <div className="story-details-about">
                <span className="text-muted">{by}</span>
                <span className="text-muted">{convertTime(time)}</span>
            </div>
            <div className="story-details-header d-flex">
                <h4 className="mb-1">{title}</h4>
                <a href={url} target="_blank" rel="noreferrer">(Source link)</a>
            </div>
            <div className="story-details-footer">
                <span className="text-muted"><i className="fa fa-star-o" aria-hidden="true"></i> {score} score</span>
                <span className="text-muted"><i className="fa fa-comment-o" aria-hidden="true"></i> {descendants} comments</span>
            </div>
        </div> 
    )
}

class StoryDetailsContainer extends React.Component{

    componentDidMount(){
        this.props.fetchStory()
    }

    render(){
        const {story, storyLoading, storyError} = this.props

        const spinner = storyLoading ? <Spinner /> : null;
        const content = (!storyLoading && !storyError) ? <StoryDetails story={story} /> : null;
        const errorMessege = storyError? <ErrorIndicator /> : null;
        return(
            <div className="story-details-wrapper d-flex">
                <div className="row-btn">
                    <Link to="/">
                        <button className="btn btn-outline-secondary btn-sm">
                            <i className="fa fa-caret-left" aria-hidden="true"></i> Back
                        </button>
                    </Link>
                </div>
                {spinner}
                {content}
                {errorMessege}
            </div>
        )
    }

}

const mapStateToProps = ({selectedStory: {story, storyLoading, storyError}}) => {
    return {
        story,
        storyLoading,
        storyError
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     const {hackernewsService, selectedItem} = ownProps
//     return{
//         fetchStory: fetchStory(hackernewsService, selectedItem, dispatch)
//     }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
    const {hackernewsService, selectedItemId} = ownProps
    return bindActionCreators({
        fetchStory: fetchStory(hackernewsService, selectedItemId)
    }, dispatch)
}

export default compose(
    withHackernewsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(StoryDetailsContainer)