import CognitoProvider from "next-auth/providers/cognito"

export const authOptions = {
    providers: [
        CognitoProvider({
            clientId: process.env.COGNITO_CLIENT_ID,
            issuer: `https://cognito-idp.${process.env.COGNITO_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`
        })
    ],
    callbacks: {
        async signIn ({ profile }) {
            //1. connect to the database
            //2. check if user exists
            //3. if not, add user to database
            //4. return true to allow sign in
        },
        async session ({ session }) {
            //1. Get user from database
            //2. assign user ID to the sesssion
            //3. return session
        }
    }
}