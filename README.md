# Panduan Penggunaan Laravel

Ini adalah panduan langkah demi langkah untuk mengatur dan menjalankan aplikasi Laravel dengan Nuxt.js.

## Persiapan Awal

1. Pastikan mesin Anda memenuhi persyaratan sistem untuk menjalankan Laravel. Anda memerlukan PHP, MySQL, dan komponen pendukung lainnya. Lihat dokumentasi Laravel untuk informasi lebih lanjut tentang persyaratan sistem.

2. Buatlah database baru dengan nama "laravel_nuxt" di MySQL atau sesuaikan dengan preferensi Anda.

## Instalasi dan Konfigurasi

1. Salin file `.env.example` menjadi `.env` dengan perintah berikut:
cp .env.example .env


2. Buka file `.env` dan konfigurasi pengaturan database. Sesuaikan parameter seperti berikut:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_nuxt
DB_USERNAME=root
DB_PASSWORD=


Pastikan untuk mengisi `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, dan `DB_PASSWORD` sesuai dengan pengaturan database Anda.

3. Jalankan perintah berikut untuk menginstal semua dependensi PHP melalui Composer:

composer install

4. Jalankan perintah berikut untuk menghasilkan kunci aplikasi:

php artisan key:generate

5. Jalankan perintah berikut untuk menjalankan migrasi dan mengisi database dengan data seed:

php artisan migrate --seed

Ini akan membuat tabel-tabel yang diperlukan dalam database dan mengisi data seed awal.

## Menjalankan Aplikasi

1. Jalankan server pengembangan Laravel dengan perintah berikut:

php artisan serve --port=8000


Ini akan menjalankan server pengembangan lokal di `http://localhost:8000`.

2. Buka browser dan akses `http://localhost:8000` untuk melihat aplikasi Laravel yang berjalan.

## Catatan Tambahan

- Pastikan MySQL server Anda berjalan.
- Jika Anda mengalami masalah dalam menjalankan perintah `php artisan`, pastikan PHP telah ditambahkan ke PATH sistem Anda.

Ini adalah panduan sederhana untuk menjalankan aplikasi Laravel dengan Nuxt.js. Anda dapat menyesuaikan langkah-langkah ini sesuai dengan kebutuhan proyek Anda. Untuk informasi lebih lanjut tentang pengembangan dengan Laravel, Anda dapat merujuk ke dokumentasi resmi Laravel.


Salin konten tersebut dan simpan dalam file readme.md menggunakan teks editor Anda. Pastikan untuk menyimpan file dengan ekstensi `.md` untuk mendapatkan format markdown yang benar.


