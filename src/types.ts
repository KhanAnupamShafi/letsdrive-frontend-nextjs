import { Session } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    id?: string; //

    user?: {
      email: string;
    };
    expires?: string;
    email?: string;
    sub?: string;
    accessToken?: string;
    role?: string;
    phoneNumber?: string;
    fullName?: string;
    iat?: number;
    exp?: number;
    jti?: string;
  }
}
