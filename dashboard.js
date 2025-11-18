// Contoh: alert button Mulai Daur Ulang
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Fitur Mulai Daur Ulang akan segera hadir!');
  });
});

// Contoh: tombol navigasi lokasi RVM
document.querySelectorAll('.btn-navigate').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Fitur navigasi menuju RVM akan segera hadir!');
  });
});

// Contoh: tombol subscribe newsletter
document.querySelector('.newsletter-form').addEventListener('submit', e => {
  e.preventDefault();
  const input = e.target.querySelector('input[type=email]');
  if(input.value.trim()) {
    alert(`Terima kasih telah subscribe: ${input.value.trim()}`);
    input.value = '';
  } else {
    alert('Masukkan alamat email yang valid');
  }
});

const images = document.querySelectorAll('.slider-img');
let current = 0;

function showSlide(idx) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === idx);
  });
}

function nextSlide() {
  current = (current + 1) % images.length;
  showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 1900); // Ganti slide setiap 1.9 detik (loop infinite)