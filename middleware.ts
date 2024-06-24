import { type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value; // 拿到cookie的value值,监测是否登录

  // 如果用户登录并且请求的路径不是以/dashboard开始,则重定向到/dashboard
  if(currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) { // startsWith() 方法用于检测字符串是否以指定的前缀开始
    return Response.redirect(new URL('/dashboard',request.url))
  }

  // 如果用户未登录并且请求的路径不是以/login开始,则重定向到/login
  if(!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login',request.url))
  }
}

// 排除特定的路径 中间件不会处理这些请求，只处理除此之外的所有请求。
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)']
}