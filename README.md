# LetterHub UGM

_Dashboard Terpadu untuk Melacak Semua Pengajuan Surat Mahasiswa UGM di Satu Tempat._

_LetterHub UGM_ hadir sebagai solusi front-end untuk masalah ini. Kami mengusulkan sebuah _dashboard terpadu_ yang akan mememcahkan masalah tersebut dengan menyatukan semua data yang terfragmentasi ke dalam satu antarmuka yang bersih, modern, dan mudah digunakan

Proyek ini dibuat untuk kompetisi **Webcraft UGM** dengan tema "Inovasi Digital untuk Kehidupan Kampus".

**[ Coba Live Demo Di Sini ](https://<masukkan-link-vercel-atau-deployment-anda-di-sini>)**

---

### Fitur Utama (Prototipe Demo)

-   **Dashboard:** Menampilkan daftar surat (disimulasikan dari "Fakultas MIPA", "Fakultas Teknik") dalam satu _card list_ yang rapi.
-   **Filter Status Live:** Filter daftar surat secara instan berdasarkan status ("Semua", "Diproses", "Selesai", "Ditolak") tanpa me-refresh halaman.
-   **Pencarian Live:** Cari surat berdasarkan nama secara _real-time_.
-   **Simulasi Pengajuan:** Fungsionalitas modal untuk "mengajukan" surat baru. Setelah dikirim, surat akan langsung muncul di _dashboard_ dengan status "Diproses".
-   **Simulasi Download:** Tombol "Unduh" akan muncul pada surat yang berstatus "Selesai" (mensimulasikan _download_ file PDF).
-   **Landing Page:** Halaman `Homepage` yang menjelaskan masalah dan solusi sebelum masuk ke aplikasi.

---

### Teknologi yang Digunakan

-   **React.js** (Library UI)
-   **Vite** (Build Tool & Dev Server)
-   **Tailwind CSS** (Utility-first Styling)
-   **React Router DOM** (Client-side Routing)
-   **Remix Icon** (Library Ikon)
-   **React Hooks (useState, useEffect)**: Untuk semua logika interaktif (filter, search, modal).

---

### Petunjuk Instalasi & Menjalankan (Lokal)

1.  **Clone repositori ini:**

    ```bash
    git clone <URL-repositori-anda>
    ```

2.  **Masuk ke direktori proyek:**

    ```bash
    cd <nama-folder-proyek>
    ```

3.  **Install semua _dependencies_:**

    ```bash
    npm install
    ```

4.  **Jalankan _development server_:**

    ```bash
    npm run dev
    ```

5.  Buka `http://localhost:5173` (atau port yang tertera di terminal) di browser Anda.
