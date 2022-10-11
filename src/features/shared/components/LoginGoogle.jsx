import React from 'react'

import { GoogleLogin } from 'react-google-login'

export default function LoginGoogle() {
    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText="Login"
                onSuccess={(res) => console.log(res)}
                onFailure={(res) => console.log(res)}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />,
        </div>
    )
}
