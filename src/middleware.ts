import { getToken } from 'next-auth/jwt';
import { NextResponse, type NextRequest } from 'next/server';
import { jwtHelpers } from './helpers/jwtHelper';
import { ROLE } from './shared/role';

let URI = process.env.NEXT_PUBLIC_URL;
// console.log(URI, 'uri');
// This function can be marked `async` if using `await` inside
const hybridRoutes = ['/', '/login'];
const userRoutes = ['/', '/profile', '/my-bookings'];
const rolesRedirect: Record<string, string> = {
  admin: `${URI}/admin/home`,
  // user: `${URI}/`,
};
export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    // secret: 'secret',
    // secureCookie: true,
  });
  // console.log(token, '🫠');
  const decodedToken = jwtHelpers.decodeToken(
    token?.accessToken as string
  );
  const { pathname } = request.nextUrl;
  // console.log(decodedToken, 'decodedToken is');
  if (!token) {
    // console.log(pathname, 'sorry no token');

    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(`${URI}/login`);
  }

  const role = decodedToken?.role as string;
  // console.log(role, 'role middleware');
  if (
    (role === ROLE.ADMIN && pathname.startsWith('/admin')) ||
    (role === ROLE.SUPER_ADMIN && pathname.startsWith('/admin')) ||
    (role === ROLE.USER && userRoutes.includes(pathname))
  ) {
    // console.log('admin 🏸');
    return NextResponse.next();
  }

  if (pathname === '/' && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }

  return NextResponse.redirect(`${URI}/`);
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
