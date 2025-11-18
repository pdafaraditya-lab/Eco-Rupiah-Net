// Data yang ingin di-encode (contoh string QRIS atau teks lain)
var data = "00020101021126690016ID.CO.QRIS.WWW01189360091500813403180240503";

// Tampilkan teks data di elemen barcode-text
document.getElementById("barcode-text").innerText = data;

// Generate QR code dengan warna kustom
var qrcode = new QRCode(document.getElementById("qrcode"), {
  text: data,
  width: 220,
  height: 220,
  colorDark : "#1abc9c",
  colorLight : "#f8fafd",
  correctLevel : QRCode.CorrectLevel.H
});

// Download QR png ketika tombol diklik
document.getElementById('btn-download').addEventListener('click', function() {
  var img = document.querySelector('#qrcode img');
  if(!img) {
    // Fallback untuk canvas (jika img tidak tersedia)
    var canvas = document.querySelector('#qrcode canvas');
    var url = canvas.toDataURL("image/png");
    var a = document.createElement('a');
    a.href = url;
    a.download = "barcode-qr.png";
    a.click();
  } else {
    var a = document.createElement('a');
    a.href = img.src;
    a.download = "barcode-qr.png";
    a.click();
  }
});