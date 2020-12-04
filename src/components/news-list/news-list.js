import './news-list.css'

const NewsList = () => {
    return (
        <ul className="news-list">
            <li className="list-group-item">
                <div className="news-list-item">
                    <div className="news-header d-flex">
                        <span class="news-score">1</span>
                        <h5 className="mb-1">My YC app: Dropbox - Throw away your USB drive
                            <small><a href="#" className="news-source">(http://www.getdropbox.com/u/2/screencast.html)</a></small>
                        </h5>
                        <small className="text-muted">04.12.2020 17:51</small>
                    </div>
                    {/* <a href="#" className="news-source">http://www.getdropbox.com/u/2/screencast.html</a> */}
                    <div className="news-footer">
                        <small className="text-muted">by <a href="" class="">dhouston</a></small>
                        <small className="text-muted">70 points</small>
                        <small className="text-muted"><a href="" class="">53 comments</a></small>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default NewsList 