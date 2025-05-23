# Chú ý

- .env là để set up public server api cho toàn hệ thống
- Nếu form ở trên server chúng ta có thể tạo ra 1 hàm trong component ngay đó luôn
- `use server` ở đầu trang nếu tách ra 1 component riêng và `use client` và `use server` kh thể ở trong cùng 1 server

## Error Handling

- Xử lí toàn hệ thống là nó sẽ theo layout tổng

## Data fetching ở Client

- Làm giống như React là dùng useState với useEffect

## Kĩ thuật debounce

- Sử dụng kĩ thuật debounce để ngăn người dùng gọi API liên tục khi nhập thông tin trong ô tìm kiếm

## useActionState

- Nhớ phải có preState
- Khi truyền action vô form là formaction
- cái th hook này có trạng thái là pending được hỗ trợ thuộc tính là disable={pending}: Tính năng này là vô hiệu hóa cái nút trong lúc chờ xử lí. Không cho ng dùng click nhiều lần

## zod

- Nó không hỗ trợ string({required_errors})
