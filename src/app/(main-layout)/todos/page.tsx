import Link from "next/link";
import React from "react";
// import TodoAdd from "./_components/TodoAdd";
import SearchForm from "./_components/SearchForm";
import TodoAdd2 from "./_components/TodoAdd2";
// Data fetching Component Server

const getTodoList = async (q: string = "") => {
    // Phiên Nextjs 15 đã đặc cache "no-store" là default rồi nên chúng ta kh cần đặt
    // cache: "no-store": là Bên phía BE cập nhật dữ liệu thì FE cũng sẽ được cập nhật theo
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/todos?q=${q}`,
        {
            next: {
                tags: ["todos"],
            }
        }
    )
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

export default async function TodoPage({
    searchParams
}: {
    searchParams: Promise<{ q: string }>;
}) {
    const q = (await searchParams).q || "";

    const todoList = await getTodoList(q);


    return (
        <div className="container mt-5">
            <h1 className="display-5 fw-bold text-center mb-4">Todo List: {q}</h1>
            <SearchForm />
            <div className="list-group mb-4">
                {todoList.length > 0 ? (
                    todoList.map((todo: Todo) => (
                        <h3 key={todo.id}>
                            <Link
                                href={`/todos/${todo.id}`}
                                className="text-decoration-none text-secondary link-dark  link-hover "
                            >
                                {todo.title}
                            </Link>
                            <Link
                                href={`/todos/edit/${todo.id}`}
                                className="btn btn-info mt-2 mb-2 float-end"
                            >
                                Edit
                            </Link>
                        </h3>
                    ))
                ) : (
                    <div className="alert alert-info text-center" role="alert">
                        No todos yet. Add one below!
                    </div>
                )}
            </div>
            {/* <TodoAdd /> */}
            <TodoAdd2 />
        </div>
    );
}
