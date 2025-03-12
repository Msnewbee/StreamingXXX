// Verifikasi Usia
function verifyAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }
    if (age >= 18) {
        alert("Selamat datang! Anda dapat mengakses situs ini.");
        document.getElementById('age-verification').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        showSection('home'); // Tampilkan bagian Home secara default
    } else {
        alert("Maaf, Anda belum cukup umur untuk mengakses situs ini.");
        window.location.href = "https://www.google.com"; // Redirect ke halaman lain
    }
}

// Tampilkan bagian yang dipilih
function showSection(sectionId) {
    // Sembunyikan semua bagian
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    // Tampilkan bagian yang dipilih
    document.getElementById(sectionId).style.display = 'block';
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
