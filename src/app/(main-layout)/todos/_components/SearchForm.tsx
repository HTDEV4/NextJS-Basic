"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { debounce } from "../../utils/debounce";

export default function SearchForm() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    // Sử dụng kĩ thuật debounce để ngăn người dùng gọi API liên tục khi nhập thông tin trong ô tìm kiếm
    const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value;
        router.push(`${pathname}?q=${keyword}`);
    });

    return (
        <div className="container mt-4 mb-2.5">
            <div className="input-group">
                <input
                    type="search"
                    placeholder="Search todos..."
                    className="form-control"
                    aria-label="Search todos"
                    onChange={handleSearch}
                    defaultValue={searchParams.get("q") ?? ""}
                />
                <span className="input-group-text cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                    >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </span>
            </div>
        </div>
    );
}
