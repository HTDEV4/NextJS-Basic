"use client"
import React from "react";

export default function Error({
    error, reset }: {
        error: Error & { digest?: string }
        reset: void;
    }) {
    return (
        <div className="container py-3 text-center bg-primary text-white">
            <h1>Error</h1>
            <p>Something went wrong</p>
            <p>{error.message}</p>
            <button className="btn btn-secondary" onClick={() => reset()}>Try again</button>
        </div>
    );
}
