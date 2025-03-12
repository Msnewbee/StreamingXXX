// Verifikasi Usia
function verifyAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear(); // Ganti const dengan let
    const monthDifference = today.getMonth() - birthdate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--; // Ini akan berfungsi karena age sekarang menggunakan let
    }
    if (age >= 18) {
        alert("Selamat datang! Anda dapat mengakses situs ini.");
        document.getElementById('age-verification').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        alert("Maaf, Anda belum cukup umur untuk mengakses situs ini.");
        window.location.href = "https://www.google.com"; // Redirect ke halaman lain
    }
}

// Form Kontak
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Pesan berhasil dikirim!');
        this.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengirim pesan.');
    });
});
