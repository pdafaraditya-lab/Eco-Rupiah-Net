// Navigasi ke maps (button .btn-navigate), default: open in new tab (sudah HTML onclick).
document.querySelectorAll('.btn-navigate').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Default button pakai href/onlick, jadi ini hanya untuk alert atau interaksi tambahan.
    // Misal: alert sebelum pindah
    // e.preventDefault();
    // if(confirm('Anda akan diarahkan ke aplikasi Maps untuk navigasi ke lokasi RVM. Lanjutkan?')) {
    //   window.open(btn.dataset.href, '_blank');
    // }
    // Default (biarkan HTML langsung open new tab)
  });
});

// Contoh handle tombol Lihat Semua di Peta Google (optional)
const btnMap = document.querySelector('.btn-map');
if(btnMap){
  btnMap.addEventListener('click', () => {
    // Sudah ada window.open di HTML, tidak perlu JS tambahan kecuali ingin alert/confirm
    // alert('Akan membuka Google Maps di tab baru.');
  });
}