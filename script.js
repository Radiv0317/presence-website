document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginStatus = document.getElementById('loginStatus');
    
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Mendapatkan data pengguna dari local storage
      const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
      
      // Memeriksa keberadaan pengguna yang login
      const loggedInUser = usersData.find(user => user.username === username && user.password === password);
      
      // Jika pengguna ditemukan, login berhasil
      if (loggedInUser) {
        const userData = { username: loggedInUser.username };
        localStorage.setItem('userData', JSON.stringify(userData)); // Simpan informasi pengguna yang telah login
        loginStatus.innerText = 'Login successful!';
        // Lakukan aksi setelah login berhasil, seperti redirect atau tampilkan pesan
        window.location.href = 'home/home.html'; // Ganti dengan URL halaman home yang sesuai
      } else {
        loginStatus.innerText = 'Invalid username or password';
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const registerLink = document.getElementById('registerLink');
  
    registerLink.addEventListener('click', function() {
      window.location.href = 'register/register.html'; // Ganti dengan URL halaman registrasi
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const adminLoginLink = document.getElementById('adminLoginLink');
  
    adminLoginLink.addEventListener('click', function() {
      window.location.href = 'admin/login/admin-login.html'; // Ganti dengan URL halaman login admin
    });
  });
    
  