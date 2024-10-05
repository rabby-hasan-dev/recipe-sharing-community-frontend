import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCurrentUser } from './services/AuthService';


type Role = keyof typeof roleBasedRoutes;

const authRoutes = ['/login', '/register']

const roleBasedRoutes = {
    USER: [/^\/user/], // regular expreession after profile/ match
    ADMIN: [/^\/admin/],
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const user = await getCurrentUser();


    if (!user) {
        if (authRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url))
        }
    }

    if (user) {

        if (user?.role && roleBasedRoutes[user?.role as Role]) {
            const routes = roleBasedRoutes[user?.role as Role];
            if (routes.some((route) => pathname.match(route))) {
                return NextResponse.next();
            }
        }
    }


    return NextResponse.redirect(new URL('/', request.url))

}



// See "Matching Paths" below to learn more

export const config = {
    matcher: ['/user', '/user/:page*', '/admin', '/login', '/register'],

}