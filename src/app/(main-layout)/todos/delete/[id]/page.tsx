import React from "react";
import { deleteTodo } from "../../action";
import ButtonCancel from "./Button";


type Params = {
    params: Promise<{ id: string }>;
};


export default async function DeletePage({ params }: Params) {
    const { id } = await params;

    return (
        <form action={deleteTodo}>
            <h1>Delete Todo</h1>
            <p>Bạn có chắc chắn muốn xóa?</p>
            <button className="btn btn-primary">Ok</button>
            <ButtonCancel />
            <input type="hidden" name="id" value={id} />
        </form>
    );
}
