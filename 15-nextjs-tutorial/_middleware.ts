import { NextResponse } from "next/server";

// Middleware example
export function middleware(request: Request) {
  console.log("Hello there");
  return NextResponse.redirect(new URL("/", request.url));
}

// Config with URL matchers
export const config = {
  matcher: ["/about/:path*", "/tours/:path*"],
};
