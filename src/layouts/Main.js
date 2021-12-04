import * as React from 'react'
import Login from '../components/Login'

const Main = ({children}) => {
    // If no user token is found, show the login page
    return (
        <div>
            <h1>Main</h1>
            <div>{children}</div>
            <p>This is the main page</p>
            <Login></Login>
        </div>
    )
}


export default Main