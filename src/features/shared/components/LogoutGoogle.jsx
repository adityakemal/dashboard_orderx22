import React from 'react'

import { GoogleLogout } from 'react-google-login'

export default function LogoutGoogle() {
    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={(res) => console.log(res)}
            />,
        </div>
    )
}

