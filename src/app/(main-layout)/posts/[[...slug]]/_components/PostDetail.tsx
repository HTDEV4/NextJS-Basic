"use client"

import { useEffect, useState } from "react";
import { Post } from "./PostList";

export default function PostDetail({ post: postId }: { post: string }) {
    const [post, setPost] = useState<Post>({} as Post);

    const getPost = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/posts/${postId}`);

        const data = await response.json();
        setPost(data);
    }

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div>
            <h1>Post Detail Page</h1>
            <h2>Post: {post.title}</h2>
            <h2>Content: {post.content}</h2>
        </div>
    );
}
