import * as React from 'react'

const Login = () => {
    return (
        <button onClick={authenticateUser}>Login</button>
    )
}

const redirect_uri = 'http://localhost:8000'
const authorizationCodeGrantUrl = new URL('https://www.myfitnesspal.com/oauth2/authorize')
const accessTokenRequestUrl = new URL('https://www.myfitnesspal.com/oauth2/token')
const clientId = 'myfitnesspal'
const clientSecret = 'myfitnesspal'


async function authenticateUser() {
    let userToken = getAuthorizationCode()
    .then(data => {getUserAccessToken(data.code)})
    .then(data => {data.expires_at = Date.now() + data.expires_in * 1000; return data})
    .then(data => {console.log(data)})
    .then(data => {return data})
    .catch(err => {console.log(err)})
    return userToken
}

async function getUserAccessToken(code) {
    const response = await fetch(accessTokenRequestUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'x-www-form-urlencoded',
            'mfp-client-id': clientId,
        },
        body: JSON.stringify({
            grant_type: 'authorization_code',
            code: code,
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirect_uri,
        })
    })
    if (!response.ok) {
        throw new Error('Error getting access token')
    }
    return response.json()
}

async function refreshUserAccessToken(user) {
    const response = await fetch(accessTokenRequestUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'x-www-form-urlencoded',
            'mfp-client-id': clientId,
        },
        body: JSON.stringify({
            grant_type: 'refresh_token',
            refresh_token: user.refresh_token,
            client_id: clientId,
            client_secret: clientSecret,
            user_id: user.user_id,
        })
    })
    if (!response.ok) {
        throw new Error('Error getting access token')
    }
    return response.json()
}

async function getAuthorizationCode() {
    let params = {
        response_type: 'code',
        client_id: clientId,
        scope: 'measurements diary',
        redirect_uri: redirect_uri,
    }
    authorizationCodeGrantUrl.search = new URLSearchParams(params)

    const response = await fetch(authorizationCodeGrantUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'mfp-client-id': clientId,
        },
        mode: 'no-cors',
    })
    if (!response.ok) {
        throw new Error('Error getting authorization code')
    }
    return response.json()
}

export default Login