import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import Menu from '../components/Menu';

const login = () => {
    const {data:session} = useSession();

    if(session){
        return (
            <>
                <Menu></Menu>
                <div>
                    welcome, {session.user.name}
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            </>
        )
    }
    
    return (
        <>
            <Menu></Menu>
            <div>
                You are not signed in. please log in
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        </>
    )
}

export default login