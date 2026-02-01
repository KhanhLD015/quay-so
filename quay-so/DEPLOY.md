# Hướng dẫn deploy lên web

Dự án là **static site** (chỉ HTML, CSS, JS) nên có thể deploy miễn phí trên nhiều nền tảng.

---

## Cách 1: Netlify Drop (nhanh nhất, không cần tài khoản)

1. Vào **https://app.netlify.com/drop**
2. Kéo thả **cả thư mục** `spin-number` (chứa `index.html`, `style.css`, `script.js`) vào vùng drop.
3. Netlify sẽ tạo link dạng `https://xxxxx.netlify.app`. Copy link để dùng.

**Lưu ý:** Deploy kiểu drop không gắn với tài khoản thì link có thể mất. Nên đăng ký Netlify (miễn phí) rồi đăng nhập trước khi drop để site được lưu trong tài khoản.

---

## Cách 2: Deploy bằng GitHub + Netlify/Vercel (tốt cho sau này)

### Bước 1: Đẩy code lên GitHub

Mở terminal trong thư mục `spin-number` và chạy:

```bash
git init
git add .
git commit -m "Initial: Quay so may man"
```

Tạo repo mới trên **https://github.com/new** (không bật README, .gitignore). Sau đó:

```bash
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

(Thay `USERNAME` và `REPO_NAME` bằng tên GitHub và tên repo của bạn.)

### Bước 2: Deploy trên Netlify

1. Vào **https://app.netlify.com** → đăng nhập.
2. **Add new site** → **Import an existing project**.
3. Chọn **GitHub** → authorize → chọn repo `spin-number`.
4. Cấu hình:
   - **Build command:** để trống
   - **Publish directory:** `.` (root)
5. **Deploy site**. Xong sẽ có link dạng `https://ten-site.netlify.app`.

### Hoặc dùng Vercel

1. Vào **https://vercel.com** → đăng nhập (có thể dùng GitHub).
2. **Add New** → **Project** → import repo `spin-number`.
3. **Root Directory:** để mặc định. **Deploy**.
4. Sẽ có link dạng `https://spin-number-xxx.vercel.app`.

---

## Cách 3: GitHub Pages

1. Đẩy code lên GitHub như **Bước 1** ở Cách 2.
2. Vào repo → **Settings** → **Pages**.
3. **Source:** Deploy from a branch.
4. **Branch:** `main` (hoặc `master`) → folder **/ (root)** → Save.
5. Đợi vài phút, site sẽ có tại:  
   `https://USERNAME.github.io/REPO_NAME/`

---

## Tóm tắt

| Cách             | Độ khó     | Ghi chú                            |
| ---------------- | ---------- | ---------------------------------- |
| Netlify Drop     | Dễ nhất    | Kéo thả folder, có link ngay       |
| GitHub + Netlify | Trung bình | Có Git, deploy auto khi push       |
| GitHub + Vercel  | Trung bình | Giống trên, dùng Vercel            |
| GitHub Pages     | Trung bình | Site tại `username.github.io/repo` |

Nếu chỉ cần có link nhanh: dùng **Netlify Drop (Cách 1)**.  
Nếu muốn chỉnh code rồi tự động deploy lại: dùng **GitHub + Netlify hoặc Vercel (Cách 2)**.
