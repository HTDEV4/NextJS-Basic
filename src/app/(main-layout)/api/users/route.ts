// GET ==> HTTP METHOD GET
// POST ==> HTTP METHOD POST
// PUT ==> HTTP METHOD PUT
// PATCH ==> HTTP METHOD PATCH
// DELETE ==> HTTP METHOD DELETE

import { NextRequest, NextResponse } from "next/server"
// import { headers } from "next/headers";
// import { cookies } from "next/headers";

// search Params
export const GET = async (request: NextRequest) => {
    const keyword = await request.nextUrl.searchParams.get("keyword");
    // Không cần sử dụng await vì header ở đây là 1 property đồng bộ (synchronous) của Request object.
    // const token = request.headers.get("token");

    // headers ở đây là 1 hàm bất đồng bộ (async)
    // await nó sẽ trả về Promise
    // const token = (await headers()).get("token");

    // Lấy cookie
    // const name = (await cookies()).get("name")?.value;

    // Cập nhật cookies
    // (await cookies()).set("email", "nguyenhung@gmail.com", {
    //     path: "/",
    //     maxAge: 3600,
    //     httpOnly: true,
    // })

    // Xóa cookies
    // (await cookies()).delete("name");

    return NextResponse.json({
        success: true,
        message: "Hello World",
        data: {
            keyword,
        }
    })
}

// Muốn lấy body
export const POST = async (request: NextRequest) => {
    // const bodyText = await request.text();
    // const body = Object.fromEntries(new URLSearchParams(bodyText).entries());
    // console.log(body);

    // Log th request ra coi nó sẽ hỗ trợ mình những gì
    // console.log(request);

    // * Ứng dụng thực tế làm về text kh có upload file thì sử dụng Json
    // const body = await request.json();

    // * TH sử dụng form data cho việc upload file lên api
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const images = formData.get("images");
    // console.log(images);
    return NextResponse.json(
        {
            success: true,
            message: "Created successfully",
            data: {
                name,
                email,
                images,
            },
        },
        {
            status: 201,
        }
    )
}