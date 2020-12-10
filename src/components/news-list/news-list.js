import React from 'react'
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

class NewsListContainer extends React.Component{
    componentDidMount(){
        this.props.fetchNewStories()
        this.interval = setInterval(this.updatePlanet, 10000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        const {stories, storiesLoading, storiesError, onItemSelected, fetchNewStories} = this.props
        
        const spinner = storiesLoading ? <Spinner /> : null;
        const content = (!storiesLoading && !storiesError) ? <NewsList stories={stories} onItemSelected={onItemSelected} {...this.props}/> : null;
        const errorMessege = storiesError ? <ErrorIndicator/> : null;

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
