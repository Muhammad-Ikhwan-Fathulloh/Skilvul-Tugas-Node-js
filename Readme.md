1. Mohon jelaskan apa itu Node.js? Apa perbedaanya dengan Javascript 
jawab : 

Node js adalah runtime untuk environment javascript yang bersifat open-source dan close-platform. 

Perbedaannya dengan javascript biasa bahasa pemograman yang dipakai oleh Nodejs dimana node js sebagai runtime

2. Mohon jelaskan arsitektur dari Node.js?
jawab : 

Arsitektur pada node js yaitu single thread dimana javascript menggunakan konsep single thread, yang berarti hanya memiliki satu tumpukan panggilan yang digunakan untuk menjalankan program. 

Javascript menggunakan call stack untuk melakukan manajemen single thread. ketika terdapat perintah baru maka akan ditambahkan (push) dan akan dikeluarkan ketika perintahnya selesai(pop). 

Even Loop, akan memfasilitasi kondisi dimana dengan menggunakan konsep arsitektur javascript, walaupun menggunakan single thread tetapi kita dapat melihat javascript seperti memakai multi thread. terdapat event queue yang berguna sebagai penampung ketika terdapat perintah baru yang akan dieksekussi. Event loop akan memeriksa terus menerus ketika antrian kosong di call stack maka akan menambah antrian baru dari event queque sampai semua perintah selesai dieksekusi.

Server side scriptring, Sejatinya javascript merupakan bahasa pemrograman yang digunakan di front end side. Sehingga kita hanya bisa mengerjakan javascript dengan menggunakan browser untuk menampilkan hasil eksekusinya.Tetapi dengan menggunakan NodeJS kita dapat menjalankan javascript di server side menggunakan terminal command line menggunakan perintah “node”. 

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

yang kemudian di export dan digunakan pada index.js dengan melakukan import