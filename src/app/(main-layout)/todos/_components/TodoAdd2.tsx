"use client"

import { create } from "../action";


export default function TodoAdd2() {

    return (
        <form className="card p-4" action={create}>
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
