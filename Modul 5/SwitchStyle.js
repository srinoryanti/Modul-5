// Program untuk menampilkan hari dalam bahasa Inggris berdasarkan nomor hari

// Mendefinisikan nomor hari
var nomorHari = 5;

// Variabel untuk menyimpan nama hari
var namaHari;

// Pernyataan switch untuk menentukan nama hari berdasarkan nomor hari
switch (nomorHari) {
  case 1:
    namaHari = "Monday";
    break;
  case 2:
    namaHari = "Tuesday";
    break;
  case 3:
    namaHari = "Wednesday";
    break;
  case 4:
    namaHari = "Thursday";
    break;
  case 5:
    namaHari = "Friday";
    break;
  case 6:
    namaHari = "Saturday";
    break;
  case 7:
    namaHari = "Sunday";
    break;
  default:
    namaHari = "Invalid day";
    break;
}

// Menampilkan nama hari
console.log("Today is " + namaHari);
