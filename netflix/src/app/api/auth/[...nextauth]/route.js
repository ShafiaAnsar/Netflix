import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
const authOptions = {
    providers:[
        GithubProvider({
            clientId:' Iv1.870120defd505c0b',
            clientSecret:'8b9995fa04653bcf441cab40a78151960e08d2a8',

        })
    ],
    callbacks:{
        async session({session,token,user }){
            session.user.username = session?.user?.name.split(' ').join("").toLocalLowerCase()
            session.user.uid = token.sub
            return session
        }
    },
    secret:'default_secret_key',
    synchronize: false
    
}
const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}