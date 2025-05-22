import Link from "next/link";
import { Todo } from "../page";
import { notFound } from "next/navigation";

type Params = {
    params: Promise<{ id: string }>;
};

const getTodo = async (id: string) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/todos/${id}`
    );
    if (!response.ok) {
        return null;
    }
    return response.json();
};


export default async function TodoDetailPage({ params }: Params) {
    const { id } = await params;
    const todo: Todo = await getTodo(id);
    if (!todo) {
        notFound();
    }
    return (
        <div>
            <h2>{todo.title}</h2>
            <h2>{todo.content}</h2>
            <p>{todo.completed.toString()}</p>
            <h4>
                <Link href="/todos">Back</Link>
            </h4>
        </div>
    );
}
