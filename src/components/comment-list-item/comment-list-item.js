import React from 'react'

import HackernewsService from '../../services/hackernews-service'
import {convertTime} from '../../utils'

import './comment-list-item.css'

class CommentListItem extends React.Component{
    _isMounted = false;
    hackernewsService = new HackernewsService();
    state = {
        nestedComments: [],
        commentsOpened: false
    };

    componentDidMount(){
        this._isMounted = true;
        this.updateNestedComments();
    }
    
    onToggleNestedComments = () =>{
        this.setState((state) => {
            return{
                commentsOpened: !state.commentsOpened
            }
        })
    }

    onLoadedNestedComments = (comments) => {
        if (this._isMounted) {
            this.setState({
                nestedComments: comments.filter(comment => comment.deleted !== true)
            });
        }
    }

    updateNestedComments = () => {
        const {comment} = this.props
        this.hackernewsService
            .getComments(comment.id)
            .then(this.onLoadedNestedComments)
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render(){
        const {comment: {by, time, text, kids}} = this.props
        const {nestedComments, commentsOpened} = this.state

        return(
            <li className="d-flex comment-list-item">
                <div className="comment">
                    <div className="comment-details">
                        <span className="comment-author text-muted">{by}</span>
                        <small className="text-muted"><i className="fa fa-clock-o" aria-hidden="true"></i>{convertTime(time)}</small>
                    </div>
                    <p className="comment-content" dangerouslySetInnerHTML={{__html: text}}></p>
                    {
                        (nestedComments.length) 
                            ? (<button onClick={this.onToggleNestedComments} className="comment-btn-more">
                                {
                                    commentsOpened 
                                        ? <i className="fa fa-arrow-circle-up" aria-hidden="true"> Collapse</i> 
                                        : <i className="fa fa-arrow-circle-down" aria-hidden="true"> Expands {kids.length} replies</i>
                                }
                            </button>)
                            :false
                    }
                </div>
                {
                    (nestedComments.length && commentsOpened)
                        ? (<ul className="comment-list-inner">
                            {nestedComments.map((comment) => <CommentListItem key={comment.id} comment={comment} />)}
                        </ul>)
                        : false
                }
            </li>
        )
    }
}

export default CommentListItem