import React from "react";

// interface hay type đều được
interface IPageProps {
    params: {
        slug: string;
    }
}

// Đầu tiên là truyền props và console.log(props); để ktra coi nó ra cái gì
// TH này nó ra params thì chúng ta truyền vào params 
// * Lưu ý rằng khi code typescript nhớ định kiểu 

// Lấy id là sử dụng api lên hàm lúc nào cũng phải async (bất đồng bộ)
export default async function ProductDetailPage({ params }: IPageProps) {

    const { slug } = await params;
    // [0-9]: số bất kỳ từ 0 tới 9, +: liên tiếp 1 hoặc nhiều, $: lấy ở cuối chuối, i: là kh phân biệt hoa thường
    const result = slug.match(/[0-9]+$/i)
    const productId = result ? parseInt(result[0]) : null;
    console.log(result);
    return (
        <div>
            <h1>Chi tiết sản phẩm</h1>
            <h2>ID: {productId}</h2>
        </div>
    );
}
