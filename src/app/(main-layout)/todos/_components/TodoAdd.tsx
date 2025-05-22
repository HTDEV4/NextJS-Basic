"use client"

import { useRouter } from "next/navigation";

export default function TodoAdd() {

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const title = formData.get('title');
        const content = formData.get('content');
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

        if (response.ok) {
            router.refresh();
            (e.target as HTMLFormElement).reset();
        }
    }

    return (
        <form onSubmit={handleSubmit} className="card p-4">
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter title..."
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">
                    Content
                </label>
                <textarea
                    name="content"
                    id="content"
                    placeholder="Enter content..."
                    className="form-control"
                    rows={4}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">
                Add
            </button>
        </form>
    );
}
