"use client"

import { useRouter } from "next/navigation";

export default function ButtonCancel() {
    const router = useRouter();
    return (
        <button type="button" className="btn btn-danger" onClick={() => {
            router.push('/todos');
        }}>Cancel</button>
    );
}
