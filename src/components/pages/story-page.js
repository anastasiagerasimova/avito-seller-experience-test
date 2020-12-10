import React from 'react'
import CommentList from '../comment-list'
import Header from '../header'
import StoryDetails from '../story-details'

const StoryPage = ({selectedItemId}) => {
    return(
        <React.Fragment>
            <Header />
            <main className="container">
                <StoryDetails selectedItemId={selectedItemId}/>
                <CommentList selectedItemId={selectedItemId}/>
            </main>
        </React.Fragment>
    )
}

export default StoryPage