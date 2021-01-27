import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import NewsListItem from '../news-list-item'
import {withHackernewsService} from '../hoc'
import {fetchNewStories} from '../../actions'
import {compose} from '../../utils'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import './news-list.css'

const NewsList = ({stories, onItemSelected, ...props}) => {
    return(
        <ul className = "news-list">
            {stories.map((story, index) => {
                    return (<NewsListItem key={story.id} story={story} index={index+1} onItemSelected={onItemSelected}/>)
                })
            }
        </ul>
    )
}

const NewsListContainer = (props) => {
    const {stories, storiesLoading, storiesError, onItemSelected, fetchNewStories} = props

    const content = (!storiesLoading && !storiesError) ? <NewsList stories={stories} onItemSelected={onItemSelected} {...props}/> : null;
    const errorMessege = storiesError ? <ErrorIndicator/> : null;
    const spinner = storiesLoading ? <Spinner /> : null;

    useEffect(() => {
        fetchNewStories()
        const interval = setInterval(fetchNewStories, 60000)
        return () => clearInterval(interval)
    }, [fetchNewStories])
        
    return(
        <div className="news-list-wrapper d-flex">
            <div className="btn-row">
                <button className="btn btn-outline-success" onClick={fetchNewStories}>
                    <i className="fa fa-refresh" aria-hidden="true"></i> Refresh stories
                </button>
            </div>
            {spinner}
            {content}
            {errorMessege}
        </div>
    )
}

const mapStateToProps = ({newsList: {stories, storiesLoading, storiesError}})  => {
    return {
        stories,
        storiesLoading,
        storiesError
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {hackernewsService} = ownProps
    return bindActionCreators({
        fetchNewStories: fetchNewStories(hackernewsService)
    }, dispatch)
}

export default compose(
    withHackernewsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(NewsListContainer)
