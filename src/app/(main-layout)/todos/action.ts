"use server";

import { revalidateTag } from "next/cache";

// import { revalidatePath } from "next/cache";

// import { redirect } from "next/navigation";

export const create = async (formData: FormData) => {
    const title = formData.get('title');
    const content = formData.get('content');
    if (!title || !content) {
        return {
            success: false,
            message: "Missing title or content",
        };
    }
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/todos`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, content, completed: false }),
        }
    )
    // Sử dụng hàm này để kh tải lại trang
    // revalidatePath("/todos");
    revalidateTag("todos");
    return {
        success: response.ok,
        message: "Todo created successfully.",
    }

}