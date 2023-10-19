import { getToken } from 'next-auth/jwt';
import { NextResponse, type NextRequest } from 'next/server';
import { ROLE } from './shared/role';

const URI = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
// console.log(URI, 'uri');
// This function can be marked `async` if using `await` inside
const hybridRoutes = ['/', '/login'];
const userRoutes = ['/', '/profile', '/my-bookings'];
const rolesRedirect: Record<string, unknown> = {
  admin: `${URI}/admin/home`,
  user: `${URI}`,
};
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  // const decodedToken = jwtHelpers.decodeToken(
  //   token?.accessToken as string
  // );
  const { pathname } = request.nextUrl;
  if (!token) {
    // console.log(pathname, 'sorry no token');

    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }

    return NextResponse.redirect(`${URI}/login`);
  }

  const role = token?.role as string;
  console.log(role, 'role middleware');
  if (
    (role === ROLE.ADMIN && pathname.startsWith('/admin')) ||
    (role === ROLE.SUPER_ADMIN && pathname.startsWith('/admin')) ||
    (role === ROLE.USER && userRoutes.includes(pathname))
  ) {
    // console.log('next');
    return NextResponse.next();
  }

  if (pathname === '/' && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }

  return NextResponse.redirect(`${URI}`);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    //hybrid routes
    '/',
    '/login',
    //user routes
    '/profile',
    '/my-bookings',
    //admin * routes
    '/admin/:page*',
  ],
};

/**
 * next auth amader ekta next-auth.session-token provide kore -
 * amader backend amader arekta accessToken
 * tahole project er modhe 2 ta token parallel
 * next auth er token ta amadedr login ta dhore rakhe
 * next auth behaviour hocche eta apni jokhoni reload marben next-auth token ta refresh kore
 * amader backend er accessToken ta ache sheta kintu refresh hocche na
 * tar mane auth token reload marle refresh holeo, accesstoken refresh. ebong accessToken amadxer login persist kortese
 * tar mane emon ekta time ashbe jokhon amader next auth er token refresh hoye valid hoye jabe but accessToken expire hoye jabe
 * tokhon amader site loggedIn thakbe but data ashbe na
 *
 * so amader strategy hobe:
 * 1. amra check korbo accessToken expire hoye geche kina
 * 2. jodi hoye jay tahole notun kore refresh token generate kore amader access token ta update korte hobe jaate user logged in thakleo data jate ashte pare
 */
