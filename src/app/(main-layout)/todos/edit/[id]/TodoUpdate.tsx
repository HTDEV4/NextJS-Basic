"use client"

import { useState } from "react";
import { update } from "../../action";
import { Todo } from "../../page";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function TodoUpdate({ todo }: { todo: Todo }) {
    const [msg, setMsg] = useState<string>("");
    const router = useRouter();
    return (
        <form
            className="card p-4"
            action={async (formData: FormData) => {
                formData.append("id", todo.id);
                const response: { success: boolean; message: string | undefined } = await update(formData);
                if (!response.success) {
                    setMsg(response.message as string);
                } else {
                    router.push(`/todos`);
                }
            }}
        >
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    className="form-control"
                    defaultValue={todo.title}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">
                    Content
                </label>
                <textarea
                    name="content"
                    id="content"
                    placeholder="Content"
                    className="form-control"
                    rows={4}
                    defaultValue={todo.content}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    <input type="checkbox" defaultChecked={todo.completed} name="completed" />
                    Completed
                </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
                Update
            </button>
            <Link href={`/todos`} className="btn btn-secondary w-100 mt-1">Back</Link>
            {msg && <span className="text-danger mt-2">{msg}</span>}
        </form>
    );
}
