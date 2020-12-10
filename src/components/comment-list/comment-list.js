import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import CommentListItem from '../comment-list-item'
import {withHackernewsService} from '../hoc'
import {fetchComments} from '../../actions'
import {compose} from '../../utils'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import './comment-list.css'

const CommentList = ({comments, ...props}) => {
    return (
        <ul className="comment-list">
            {
                comments.map((comment) => {
                    return <CommentListItem key={comment.id} comment={comment}/>
                })
            }
        </ul>
    )
}

class CommentListContainer extends React.Component{
    componentDidMount(){
        this.props.fetchComments()
        this.interval = setInterval(this.props.fetchComments, 60000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        const {comments, commentsLoading, commentsError, fetchComments} = this.props
       
        const spinner = commentsLoading ? <Spinner /> : null;
        const content = (!commentsLoading && !commentsError) 
            ? (comments.length ? <CommentList comments={comments} /> : <div className="comment-list-message">No comments yet</div>)
            : null;
        const errorMessege = commentsError? <ErrorIndicator/> : null;
        
        return(
            <div className="comment-list-wrapper d-flex">
                <h4 className="comment-list-title">Comments</h4>
                <div className="btn-row">
                    <button className="btn btn-outline-success" onClick={fetchComments}>
                        <i className="fa fa-refresh" aria-hidden="true"></i> Refresh comments
                    </button>
                </div>
                {spinner}
                {content}
                {errorMessege}
            </div>
        )
    }
}
 
const mapStateToProps = ({commentList: {comments, commentsLoading, commentsError}}) => {
    return {
        comments,
        commentsLoading,
        commentsError
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {hackernewsService, selectedItemId} = ownProps
    return bindActionCreators({
        fetchComments: fetchComments(hackernewsService, selectedItemId)
    }, dispatch)
}

export default compose(
    withHackernewsService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CommentListContainer)
