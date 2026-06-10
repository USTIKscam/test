import { NextResponse, type NextRequest } from "next/server";
import { jwtVerify } from "jose";

const cookieName = "portfolio_admin_session";

function secret() {
  return new TextEncoder().encode(process.env.AUTH_SECRET ?? "development-secret-change-me");
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/admin") || pathname === "/admin/login") {
    return NextResponse.next();
  }
  const token = request.cookies.get(cookieName)?.value;
  if (!token) return NextResponse.redirect(new URL("/admin/login", request.url));
  try {
    await jwtVerify(token, secret());
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"]
};
