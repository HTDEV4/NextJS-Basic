import Link from "next/link";
import React from "react";
import TodoAdd from "./_components/TodoAdd";
// Data fetching Component Server

const getTodoList = async () => {
    // Phiên Nextjs 15 đã đặc cache "no-store" là default rồi nên chúng ta kh cần đặt
    // cache: "no-store": là Bên phía BE cập nhật dữ liệu thì FE cũng sẽ được cập nhật theo
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/todos`)
    if (!response.ok) {
        // Ở trong production thì nó kh bị lỗi
        throw new Error("Có lỗi khi lấy dữ liệu /todos");
    }
    return response.json();
}

export type Todo = {
    id: string;
    title: string;
    content: string;
    completed: boolean;
};

export default async function TodoPage() {
    const todoList = await getTodoList();

    return (
        <div>
            <h1>Todo List</h1>
            {
                todoList.map((todo: Todo) => (
                    <Link href={`todos/${todo.id}`} key={todo.id}>
                        <h3 >{todo.title}</h3>
                    </Link>
                ))
            }
            <TodoAdd />
        </div>
    );
}
