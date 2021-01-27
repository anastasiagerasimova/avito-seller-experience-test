import React, {useState, useEffect, useCallback, useRef} from 'react'

import HackernewsService from '../../services/hackernews-service'
import {convertTime} from '../../utils'

import './comment-list-item.css'

const CommentListItem = (props) => {
    const isMountedRef = useRef(null);
    const [nestedComments, setNestedComments] = useState([])
    const [commentsOpened, setCommentsOpened] = useState(false)
    const {comment: {by, id, time, text}} = props

    const getNestedComments = useCallback(() => {
        const hackernewsService = new HackernewsService()
        hackernewsService
            .getComments(id)
            .then((comments) => {
                if(isMountedRef.current){
                    setNestedComments(comments.filter(comment => comment.deleted !== true))
                }
            })
    }, [setNestedComments, id])

    useEffect(() => {
        isMountedRef.current = true;
        getNestedComments()
        return () => isMountedRef.current = false
    }, [getNestedComments])

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
                        ? (<button onClick={() => setCommentsOpened((state) => !state)} className="comment-btn-more">
                            {
                                commentsOpened 
                                    ? <i className="fa fa-arrow-circle-up" aria-hidden="true"> Collapse</i> 
                                    : <i className="fa fa-arrow-circle-down" aria-hidden="true"> Expands {nestedComments.length} replies</i>
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

export default CommentListItem