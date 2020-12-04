import React from 'react'
import ErrorIndicator from '../error-indicator/index'

export default class ErrorBoundry extends React.Component{
    constructor(){
        super()
        this.state ={
            hasError: false
        }
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

    render(){
        if(this.state.hasError){
            return <ErrorIndicator />
        }
        return this.props.children 
    }
}