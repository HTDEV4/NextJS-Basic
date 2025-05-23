"use client"

// import { useState } from "react";
import { useActionState } from "react";
import { create } from "../action";

const initialState = {
    message: "",
    success: false,
}

export default function TodoAdd2() {
    // const [msg, setMsg] = useState<string>("");
    const [state, formAction] = useActionState(create, initialState);
    console.log(state);
    return (
        <form
            className="card p-4"
            // action={async (formData: FormData) => {
            //     const response: { success: boolean; message: string | undefined } = await create(formData);
            //     if (!response.success) {
            //         setMsg(response.message as string);
            //     }
            //     return setMsg(response.message as string);
            // }}
            action={formAction}
        >
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
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">
                Add
            </button>
            {state.message && <span className="text-danger mt-2">{state.message}</span>}
        </form>
    );
}
