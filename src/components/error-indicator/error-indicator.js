import React from 'react'

import './error-indicator.css'

const ErrorIndicator = () => {
  return(
    <div className="error-indicator jumbotron text-center">
        <h4>An error has occurred!</h4>
        <p className="lead">Opps! Something went wrong on the server. Please reload the page or try again later.</p>
    </div>
  )
}

export default ErrorIndicator