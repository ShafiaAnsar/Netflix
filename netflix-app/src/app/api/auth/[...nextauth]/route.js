import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_clientId,
      clientSecret: process.env.GITHUB_clientSecret,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_clientId || '' ,
      clientSecret: process.env.GOOGLE_clientSecret || ''
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session?.user?.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;

      return session;
    },
  },
  secret: "default_secret_key",
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };