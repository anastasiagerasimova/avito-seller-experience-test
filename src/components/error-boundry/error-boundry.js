import React from 'react'
import ErrorIndicator from '../error-indicator/index'
import { useErrorBoundary } from "use-error-boundary"

const ErrorBoundry = (props) => {
    const { ErrorBoundary, didCatch} = useErrorBoundary()
    
    return (
        <>
            {didCatch ? (
                <ErrorIndicator />
            ) : (
                <ErrorBoundary>
                    {props.children}
                </ErrorBoundary>
            )}
        </>
    )
}

export default ErrorBoundry