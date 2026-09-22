import connectDB from "@/config/database"
import User from "@/app/models/User"
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
            await connectDB()
            
            if (!profile?.email) {
                return false
            }
            //2. check if user exists
            const userExists = await User.findOne({ email: profile.email })
            //3. if not, add user to database
            if (!userExists) {
                const username = 
                  profile.name?.slice(0, 20) || 
                  profile.email.split('@')[0].slice(0, 20)

                await User.create({
                  email: profile.email,
                  username,
                  image: profile.picture || undefined
                })
            }
            return true
        },
        async session ({ session }) {
            const user = await User.findOne({ email: session.user.email })
            //2. assign user ID to the sesssion
            if (user) {
                session.user.id = user._id.toString()
            }
            return session
        }
    }
}