"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export type Post = {
    id: string;
    title: string;
    content: string;
}

export default function PostList() {
    const [postList, setPostList] = useState<Post[]>([]);

    const getPost = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/posts`);
        const data = await response.json();
        setPostList(data);
    }

    useEffect(() => {
        getPost();
    }, [])

    return (
        <div>
            <h1>Danh sách bài viết</h1>
            {
                postList.map((post: Post) => (
                    <h3 key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </h3>
                ))
            }
        </div>
    );
}
