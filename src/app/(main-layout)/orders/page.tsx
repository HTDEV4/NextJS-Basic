import { redirect } from "next/navigation";
import React from "react";

function OrdersPage() {

    const isLogin = false;

    if (!isLogin) {
        redirect(`/products`);
    }

    return (
        <div>
            <h1>Orders Page</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo consequuntur at quaerat iure eum excepturi, aperiam totam aut minus voluptas, tempore tempora adipisci, quos alias facere! Officiis quo vero illo?
            </p>
        </div>
    );
}

export default OrdersPage;
