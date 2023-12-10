document.addEventListener('DOMContentLoaded', function() {
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminLoginStatus = document.getElementById('adminLoginStatus');
    const backToLoginBtn = document.getElementById('backToLogin');

    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const adminUsername = document.getElementById('adminUsername').value;
        const adminPassword = document.getElementById('adminPassword').value;
        
        // Lakukan validasi admin di sini
        if (adminUsername === 'admin' && adminPassword === 'admin') {
            adminLoginStatus.innerText = 'Admin login successful!';
            // Lakukan aksi setelah login berhasil, misalnya redirect atau tampilkan pesan
            // Redirect ke halaman dashboard admin setelah login berhasil
            window.location.href = '/admin/dashboard.html'; // Ganti dengan URL halaman dashboard admin yang sesuai
        } else {
            adminLoginStatus.innerText = 'Invalid admin credentials';
        }
    });

    backToLoginBtn.addEventListener('click', function() {
        window.location.href = '/index.html'; // Ganti dengan URL halaman login utama
    });
});
