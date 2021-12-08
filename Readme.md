1. Mohon jelaskan apa itu Node.js? Apa perbedaanya dengan Javascript 
jawab : 

Node js adalah runtime untuk environment javascript yang bersifat open-source dan close-platform. 

Perbedaannya dengan javascript biasa bahasa pemograman yang dipakai oleh Nodejs dimana node js sebagai runtime

2. Mohon jelaskan arsitektur dari Node.js?
jawab : 

- Engine V8
Engine V8 milik Google adalah sebuah compiler JavaScript yang dibuat menggunakan bahasa pemrograman C++. Dengan komponen ini, input berupa kode JavaScript dapat di-compile menjadi kode dalam tingkat assembly. V8 sendiri terdiri dari tiga komponen:

Compiler — mengubah JavaScript menjadi bahasa pemrograman lain

Optimizer — menciptakan sebuah abstract syntax tree yang akan diubah menjadi static single assignment dan dioptimasi

Garbage collector — V8 membagi penyimpanan yang ada menjadi dua, yaitu penyimpanan lama dan baru. Keduanya  menyimpan objek JavaScript, tetapi penyimpanan baru juga merupakan tempat menaruh output dari compiler. Ketika penyimpanan baru sudah penuh, garbage collector memindahkan objek-objek lama ke penyimpanan lama agar kinerja Node.js tetap ringan

- Libuv library
Library C++ ini bertugas mengelola operasi asynchronous I/O (input/output) di Node.js dan main event loop. Di dalamnya juga terdapat thread pool reserve yang menangani thread setiap operasi I/O.

- Design pattern
Ada dua jenis design pattern yang digunakan oleh Node.js, yaitu object pool dan facade. Berikut penjelasannya:

Object pool — design pattern berisi kumpulan objek yang dapat digunakan untuk task tertentu

Facade — design pattern yang memberikan tampilan antarmuka untuk body kode

3. Apa perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
jawab : 
- Built-in Module, ialah modul yang dapat dimanfaatkan dalam membuat aplikasi. modul ini tidak perlu diinstall lagi dengan NPM karena sudah disediakan ketika install nodejs. 
- External module adalah modul yang harus di install dan diimpor menggunakan require(). 
- Custom module adalah modul yang kita buat sendiri ketika modul yang kita butuhkan tidak ada pada build-in module maupun external module.

4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js
jawab : 

Contoh dari built-in module adalah http,fs,url,querystring. contoh dari external module adalah moment, nodemon. contoh custom module adalah membuat fungsi sendiri seperti :

exports.skilvul = function () {

    return "Hello Terra!";
    
};

lalu di export dengan melakukan import pada induk file
