"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FilterForm() {

    // B3: Sử dụng query thì phải lấy pathname với router
    const pathname = usePathname();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const status = formData.get("status") as string;
        const keyword = formData.get("keyword") as string;

        // B1: console.log({ keyword, status });
        // B2: in ra được đối tượng rồi thì lấy query
        const query = new URLSearchParams({ status, keyword }).toString();
        fetch(`/api/cookies`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ key: "name", value: "nguyenhung" }),
        })
        router.push(`${pathname}?${query}`);
    }

    useEffect(() => {
        const getTokenFromCookie = async () => {
            const res = await fetch(`/api/cookies?name=token`);
            const data = await res.json();
            console.log(data);
        }
        getTokenFromCookie();
    }, [])

    return (
        <form onSubmit={handleSubmit}>
            <select name="status" id="">
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </select>
            <input type="search" name="keyword" placeholder="Keyword..." />
            <button className="btn border-t-indigo-950">Search</button>
        </form>
    );
}
