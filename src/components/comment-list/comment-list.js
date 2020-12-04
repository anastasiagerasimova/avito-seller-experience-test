import './comment-list.css'

const CommentList = () => {
    return (
        <ul className="comment-list">
            <li className="list-group-item">
                <div className="comment-item">
                    <div className="comment-header">
                        <span className="comment-author text-dark">norvig</span>
                        <small className="text-muted"><i class="fa fa-clock-o" aria-hidden="true"></i>04.12.2020 17:51</small>
                    </div>
                    <p>Aw shucks, guys ... you make me blush with your compliments. Tell you what, Ill make a deal: I'll keep writing if you keep reading. K?</p>
                </div>
            </li>
        </ul>
    )
}

export default CommentList