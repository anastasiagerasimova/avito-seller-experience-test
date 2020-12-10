import {Route, Switch} from 'react-router-dom'
import {StoryPage, HomePage} from '../pages'

const App = () => {
    return( 
        <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/stories/:id' render={({match}) => <StoryPage selectedItemId={match.params.id} />} />
        </Switch>
    )
}

export default App