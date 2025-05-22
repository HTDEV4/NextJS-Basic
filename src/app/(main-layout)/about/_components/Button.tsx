"use client"

import { useRouter } from "next/navigation";

function Button() {

    const router = useRouter();
    console.log(router);


    const handleNagive = () => {
        router.push('/products');
    }

    return (
        <div>
            <button className="btn" onClick={handleNagive}>Go Products</button>
        </div>
    );
}

export default Button;
