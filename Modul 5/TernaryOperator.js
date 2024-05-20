// Program untuk menentukan apakah suatu angka positif, negatif, atau nol

// Mendefinisikan angka yang akan diperiksa
var angka = -1;

// Menggunakan operator ternary untuk menentukan tipe angka
var tipeAngka = (angka > 0) ? "positif" : (angka < 0) ? "negatif" : "nol";

// Menampilkan hasil
console.log("Angka tersebut adalah angka " + tipeAngka + ".");
