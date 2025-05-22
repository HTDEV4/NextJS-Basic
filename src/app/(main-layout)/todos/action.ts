"use server";

export const create = async (formData: FormData) => {
    const title = formData.get('title');
    const content = formData.get('content');
    console.log(title, content);
}