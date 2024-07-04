import { withAuthenticationRequired } from '@auth0/auth0-react';
import React, { ReactNode } from 'react'

interface AuthenticationGuardProps {
    component: ReactNode | any;
}

const AuthenticationGuard = ({ component }:AuthenticationGuardProps) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => <div>REDIRECTING</div>
    })

  return <Component />
}

export default AuthenticationGuard