import React from "react";

export default function Title({ title }: Readonly<{ title: string }>) {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
}
