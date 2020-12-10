import {convertTime} from '../../utils'

import './news-list-item.css'

const NewsListItem = ({story, index, onItemSelected}) => {
    const {id, title, by, score, descendants, time} = story
 
    return(
        <li className="news-list-item list-group-item">
            <div>
                <div className="news-header d-flex">
                    <span className="news-score">{index}</span>
                    <h5 className="news-title mb-1" onClick={() => {onItemSelected(id)}}>{title}</h5>
                    <small className="text-muted">{convertTime(time)}</small>
                </div>
                <div className="news-footer">
                    <small className="text-muted">by {by}</small>
                    <small className="text-muted">{score} score</small>
                    <small className="text-muted">{descendants} comments</small>
                </div>
            </div>
        </li>
    )
}

export default NewsListItem