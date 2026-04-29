import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const decodedPathname = decodeURIComponent(pathname);

  if (decodedPathname === "/cargaviva/apresentação") {
    return NextResponse.rewrite(new URL("/cargaviva/apresentacao", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/cargaviva/:path*"],
};
