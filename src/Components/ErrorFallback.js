import React from 'react';


function ErrorFallback() {


  return (

    <div role="alert" className="text-center">
      <div>
        <div className="top-40" style={{display: "inline-block"}}>
          <h2>Something went wrong, please visit this page later</h2>
          <a className="green" style={{textDecoration: "underline"}} href="/">Go to Homepage</a>
        </div>
      </div>
    </div>
  )
}


  export default ErrorFallback