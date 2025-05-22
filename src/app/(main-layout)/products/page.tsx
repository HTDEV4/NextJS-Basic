import React from "react";
import ProductList from "./_components/ProductList";
import FilterForm from "./_components/FilterForm";
import "../../globals.css";

interface ISearchParams {
    status: string,
    keyword: string,
}

// đụng tới đường dẫn thì async await
export default async function ProductsPage({ searchParams }: { searchParams: Promise<ISearchParams> }) {
    const search = await searchParams;
    return (
        <div>
            <h2>Product</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum eveniet illum debitis! Inventore, distinctio maiores? Voluptate aut, doloremque odit, nemo repellat earum voluptas excepturi, molestias doloribus dignissimos amet obcaecati quaerat.</p>
            <p>Search: {search.status}</p>
            <p>Keyword: {search.keyword}</p>
            <FilterForm />
            <ProductList />
        </div>
    )
}
