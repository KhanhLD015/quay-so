# Quay số may mắn

Giao diện quay số 3 chữ số (1–9). Bấm **BẮT ĐẦU** để quay, bấm **DỪNG** để lần lượt dừng từng ô (mỗi ô cách nhau 2 giây).

## Chạy local

Mở thư mục `spin-number`, double-click `index.html` hoặc dùng Live Server trong VS Code/Cursor.

## Deploy lên web (để người khác truy cập)

Chỉ cần 3 file: `index.html`, `style.css`, `script.js`. Có thể deploy miễn phí bằng một trong các cách sau.

### 1. GitHub Pages (miễn phí, dễ)

1. Tạo tài khoản [GitHub](https://github.com) nếu chưa có.
2. Tạo repo mới (ví dụ tên: `spin-number`), không cần README.
3. Trên máy, mở terminal trong thư mục `spin-number` và chạy:
   ```bash
   git init
   git add index.html style.css script.js README.md
   git commit -m "Quay so may man"
   git branch -M main
   git remote add origin https://github.com/TEN-CUA-BAN/spin-number.git
   git push -u origin main
   ```
   (thay `TEN-CUA-BAN` bằng username GitHub của bạn)
4. Trên GitHub: vào repo → **Settings** → **Pages** → Source chọn **main** → Save.
5. Sau vài phút, trang sẽ có tại: `https://ten-cua-ban.github.io/spin-number/`

### 2. Netlify (kéo thả, không cần Git)

1. Vào [netlify.com](https://www.netlify.com) → Sign up (có thể dùng GitHub).
2. Kéo thả cả thư mục `spin-number` (hoặc kéo 3 file vào) vào vùng **Drag and drop your site output folder**.
3. Netlify sẽ cho bạn một link dạng `https://random-name.netlify.app`. Có thể đổi tên trong **Domain settings**.

### 3. Vercel

1. Vào [vercel.com](https://vercel.com) → Sign up.
2. **Add New** → **Project** → Import từ GitHub (đẩy code lên GitHub trước) hoặc upload thư mục.
3. Deploy xong sẽ có link dạng `https://ten-project.vercel.app`.

## Cập nhật code và đẩy lên GitHub (sau khi đã deploy)

Mỗi khi sửa HTML/CSS/JS và muốn trang GitHub Pages hiển thị bản mới:

1. Mở terminal trong thư mục `spin-number` (hoặc thư mục chứa repo `quay-so`).
2. Chạy:
   ```bash
   git add .
   git commit -m "Cập nhật giao diện"
   git push
   ```
3. Đợi 1–2 phút, GitHub Pages sẽ tự build lại. Tải lại trang (F5 hoặc Ctrl+F5) để xem bản mới.

**Lưu ý:** Nếu repo của bạn là `quay-so` và code nằm trong thư mục con `spin-number`, thì mở terminal tại **thư mục gốc repo** (chứa thư mục `spin-number`) rồi mới chạy `git add .` và `git push`.

---

Sau khi deploy, gửi link cho người khác là họ có thể mở và dùng trực tiếp trên trình duyệt.
