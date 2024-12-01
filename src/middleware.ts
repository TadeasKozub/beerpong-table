import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./actions/auth";

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected
  const path = req.nextUrl.pathname;
  const currentPageIsLogin = path === "/login";

  // 3. Decrypt the session from the cookie
  const session = await getSession();

  // 5. Redirect to /login if the user is not authenticated
  if (!currentPageIsLogin && !session?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
