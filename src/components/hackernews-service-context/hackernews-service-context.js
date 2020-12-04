import React from 'react'

const {
    Provider: HackernewsServiceProvider,
    Consumer: HackernewsServiceConsumer,
} = React.createContext()

export {
    HackernewsServiceProvider,
    HackernewsServiceConsumer
}