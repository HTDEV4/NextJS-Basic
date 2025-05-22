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
        <div className="container mt-5">
            <div className="card p-4">
                <h2 className="card-title mb-3">{todo.title}</h2>
                <p className="card-text text-muted">{todo.content}</p>
                <p className="card-text">
                    Status:{' '}
                    <span className={`badge ${todo.completed ? 'bg-success' : 'bg-warning'}`}>
                        {todo.completed ? 'Completed' : 'Pending'}
                    </span>
                </p>
                <div className="mt-4">
                    <Link href="/todos" className="btn btn-outline-primary">
                        Back to Todos
                    </Link>
                </div>
            </div>
        </div>
    );
}
