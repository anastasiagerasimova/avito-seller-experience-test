import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import App from './components/app/index'
import ErrorBoundry from './components/error-boundry'
import HackerNewsServiceContect from './components/hackernews-service-context'
import  HackerNewsService from './services/hackernews-service'
import store from './store'

const hackerNewsService = new HackerNewsService()

ReactDOM.render((
    <Provider store={store}>
        <ErrorBoundry>
            <HackerNewsServiceContect.Provider value={hackerNewsService}>
                <Router>
                    < App/>
                </Router>
            </HackerNewsServiceContect.Provider>
        </ErrorBoundry>
    </Provider>
), document.getElementById('root'))











