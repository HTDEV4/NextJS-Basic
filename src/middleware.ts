import { NextRequest, NextResponse } from "next/server";



export const middleware = (request: NextRequest) => {
    // console.log(request);

    // const allRequests = new Headers(request.headers);
    // allRequests.set('x-foo', 'bar');
    // console.log(allRequests);

    // const status = request.nextUrl.searchParams.get("status");
    // console.log(status);

    // const pathname = request.nextUrl.pathname;

    // if (pathname.startsWith("/admin")) {
    //     console.log('Xử lí middleware liên quan đến admin');
    // }
    // if (pathname.startsWith("/orders")) {
    //     console.log('Xử lí middleware liên quan đến orders');
    // }

    // * >>>> Lấy thông tin cookie
    // console.log('Cookie', request.cookies);
    // const name = request.cookies.get('name');
    // const email = request.cookies.get('email');
    // console.log(name);
    // console.log(email?.value);

    // // Lấy tất cả thuộc tính trong cookie
    // const cookie = request.cookies.getAll();
    // console.log(cookie);
    // console.log(RequestCookies.prototype);

    // // Kiểm tra cookie có giá trị không, nếu có trả về true, ngược lại
    // const hasName = request.cookies.has('name'); 
    // console.log(hasName);

    // * >>>> Response
    // Kh có trả về response luôn mà chúng ta được tiếp tục xử lí logic rồi mới trả về response 
    // const response = NextResponse.next();
    // response.cookies.set('token', 'ahihi', {
    //     path: "/",
    //     httpOnly: true, // Chỉ có server đọc được thôi
    //     maxAge: 86400,
    //     secure: true,
    // })
    // response.cookies.delete("name");
    // return response;

    // * >>> Rewrite
    // * Lưu ý: chỉ nên xài rewrite cho trường hợp url tĩnh thôi
    const pathname = request.nextUrl.pathname;

    if (pathname.startsWith("/gioi-thieu")) {
        return NextResponse.rewrite(new URL("/about", request.url));
    }
    // Th này giống như là đường dẫn đẹp
    if (pathname.startsWith("/san-pham")) {
        const productUrl = request.url;
        // Sử dụng biểu thức chính quy để lấy id từ productUrl
        const regexUrl = productUrl.match(/[0-9]+$/i)

        if (regexUrl) {
            const productId = regexUrl[0];
            return NextResponse.rewrite(new URL(`/products/${productId}`, request.url));
        }

        return NextResponse.rewrite(new URL("/products", request.url));
    }
}

export const config = {
    // matcher: [
    //     "/admin/:path*",
    //     "/orders/:path*",
    // ],
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ]
}