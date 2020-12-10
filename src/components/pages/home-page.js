import React from 'react'
import {withRouter} from 'react-router-dom'

import NewsList from '../news-list'
import Header from '../header'

class HomePage extends React.Component{

    render(){
        const{history} = this.props
        return(
            <React.Fragment>
                <Header />
                <main className="container">
                    <NewsList onItemSelected = {(itemId) => history.push(`/stories/${itemId}`)} />
                </main>  
            </React.Fragment>
        )
    }
}

export default withRouter(HomePage)
