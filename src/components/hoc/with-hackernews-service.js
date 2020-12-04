import { HackernewsServiceConsumer } from '../hackernews-service-context/index'

const withHackernewsService = () => (Wrapped) => {
    return (props) => {
        return(
            <HackernewsServiceConsumer>
                {
                    (hackernewsService) => {
                        return(<Wrapped {...props} hackernewsService={hackernewsService}/>)
                    }
                }
            </HackernewsServiceConsumer>
        )
    }
}

export default withHackernewsService