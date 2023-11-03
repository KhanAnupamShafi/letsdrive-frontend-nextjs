import { baseUrl } from '@/app/page';
import { jwtHelpers } from '@/helpers/jwtHelper';
import { getNewAccessToken } from '@/services/getNewAccessToken';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      id: 'ld-next-auth',
      type: 'credentials',
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email address',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch(`${baseUrl}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
          });
          const { data } = await res.json();
          console.log(data, 'data after rlogin');
          const verifiedToken: any = jwtHelpers.decodeToken(
            data?.accessToken
          );
          console.log(verifiedToken, 'decoded after login');
          if (res.ok && data?.accessToken) {
            return {
              ...data,
              ...verifiedToken,
            };
          }
        } catch (error: any) {
          // console.log(error);
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log(token, 'callbacks token auth option');
      // console.log(user, 'callbacks user auth option');
      // console.log(account, 'callbacks token auth option');
      return {
        ...token,
        ...user,
        ...account,
      };
    },
    async session({ session, token }: { session: any; token: any }) {
      // console.log(session, 'session auth option');
      console.log(token, 'token auth option inside session');
      const verifiedToken = jwtHelpers.verifyToken(
        token?.accessToken,
        process.env.JWT_SECRET!
      );
      console.log(verifiedToken, 'vtoken auth option');
      if (!verifiedToken) {
        const { data } = await getNewAccessToken(token?.accessToken);
        token.accessToken = data?.accessToken;
        console.log('token expired so new token generated', data);
      }
      return {
        ...session,
        ...token,
      };
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24, // this is nextAuth access token expire which should be same as jwt access token expire in
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
    error: '/',
  },
};

export default NextAuth(authOptions);
