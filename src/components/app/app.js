import React from 'react'

import {withHackernewsService} from '../hoc'
import Header from '../header/index'
import NewsList from '../news-list'
import CommentList from '../comment-list'

const App = ({ hackernewsService }) => {
    return( 
        <main className="container">
            <Header />
            <NewsList />
            <CommentList />
        </main>
    )
}

export default withHackernewsService()(App)