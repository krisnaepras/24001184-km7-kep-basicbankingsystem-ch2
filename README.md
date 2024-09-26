# Basic Banking System (Challange Chapter 2)

### Studi Kasus
Dalam studi kasus ini, kita akan membuat sebuah Basic Banking System sederhana menggunakan konsep Pemrograman Berorientasi Objek (OOP) dan mensimulasikan operasi transaksi yang asynchronous.

## Versi

- **Web**: Antarmuka yang ramah pengguna dibangun dengan HTML, CSS (Tailwind), dan JavaScript. Pengguna dapat berinteraksi dengan sistem melalui UI yang ada pada browser.
- **Terminal**: Antarmuka command-line (CLI) yang memungkinkan untuk berinteraksi dengan sistem dengan memasukkan perintah langsung ke terminal.

## Versi Web

### Cara Kerja:
1. Menampilkan saldo rekening saat ini di layar.
2. Menyediakan dua tombol: **Deposit** dan **Withdraw**.
3. Mengklik salah satu tombol akan membuka modal di mana pengguna dapat memasukkan jumlah yang diinginkan.
4. Setelah pengiriman, sistem akan memperbarui saldo dan menampilkan pesan keberhasilan atau kesalahan.

### Stack Teknologi:
- **HTML**
- **CSS**: Didesain menggunakan [Tailwind CSS](https://tailwindcss.com/).
- **JavaScript**: Menangani semua fungsionalitas, termasuk manipulasi DOM dan operasi asinkron menggunakan `Promise` dan `setTimeout()`.

### Cara Menjalankan:
1. Klon repositori ini:
    ```bash
    git clone https://github.com/krisnaepras/24001184-km7-kep-basicbankingsystem-ch2.git
    ```
2. Buka file `index.html` di browser.

## Versi Terminal

### Cara Kerja:
1. Menampilkan saldo saat ini di terminal.
2. Menyediakan menu dengan opsi untuk **Deposit**, **Withdraw**, atau **Exit**.
3. Pengguna dapat memasukkan jumlah yang diinginkan untuk deposit atau withdraw.
4. Saldo akan diperbarui setelah setiap operasi, dengan pesan sukses atau kesalahan yang ditampilkan di terminal.

### Stack Teknologi:
- **Node.js**: Versi ini menggunakan Node.js dan modul `readline` untuk operasi input/output.

### Cara Menjalankan:
1. Klon repositori ini:
    ```bash
    git clone https://github.com/krisnaepras/24001184-km7-kep-basicbankingsystem-ch2.git
    ```
2. Masuk ke direktori proyek:
    ```bash
    cd 24001184-km7-kep-basicbankingsystem-ch2
    ```
3. Jalankan versi terminal menggunakan Node.js:
    ```bash
    node banking_system_v_terminal.js
    ```
