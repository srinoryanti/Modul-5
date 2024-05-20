// Program untuk menentukan apakah suhu air dalam keadaan beku, cair, atau uap

// Mendefinisikan suhu air dalam derajat Celsius
var suhuAir = 25;

// Pernyataan kondisional untuk menentukan keadaan air
if (suhuAir <= 0) {
  console.log("Air dalam keadaan beku.");
} else if (suhuAir > 0 && suhuAir < 100) {
  console.log("Air dalam keadaan cair.");
} else {
  console.log("Air dalam keadaan uap.");
}
