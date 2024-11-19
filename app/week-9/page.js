"use client";
import { useUserAuth } from "./_utils/auth-context.js";
 

export default function Page() {


    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    

    const signIn = async () => await gitHubSignIn();
    

    const signOut = async () => await firebaseSignOut();

    

    return (
        <main>
            <h1 className = "text-4xl font-bold mb-5">Shopping List App</h1>
            {user ? (
                <div>
                    {console.log(user)}
                    <p>Signed in as ({user.email})</p>
                    <p className = "hover:cursor-pointer hover:underline " onClick={signOut}>Sign Out</p>
                    <a className = "hover:underline" href = "week-9/shopping-list">Go to app</a>
                </div>
            ) : (
                <p className = "hover:cursor-pointer hover:underline" onClick={signIn}>Sign in with GitHub</p>
            )}
        </main>
    );


}