"use client"

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Button() {

    const [clicked, setClicked] = useState(false);
    const search = useSearchParams();

    // Lần đầu sẽ đc xử lí ở phía server render trả về html như bthg
    // Lần 2 sẽ xử lí render ở Client
    const handleClicked = () => {
        setClicked(!clicked);
    }

    useEffect(() => {
        const status = search.get("status") as string;
        const keyword = search.get("keyword") as string;
        console.log(status, keyword);
    }, [])

    return (
        <div>
            <button onClick={handleClicked}>Click me {clicked ? "(Clicked)" : ""}</button>
        </div>
    );
}
