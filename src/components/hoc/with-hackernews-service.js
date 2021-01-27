import React, {useContext}from 'react'
import HackerNewsServiceContect from '../hackernews-service-context'

const withHackernewsService = () => (Wrapped) => {
    return (props) => {
        const hackernewsService = useContext(HackerNewsServiceContect)

        return(
            <Wrapped {...props} hackernewsService={hackernewsService} />
        )
    }
}

export default withHackernewsService