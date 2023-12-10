document.addEventListener('DOMContentLoaded', function() {
    const terminalBody = document.getElementById('terminalBody');
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const registerBtn = document.getElementById('registerBtn');
    
    registerBtn.addEventListener('click', function() {
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (username !== '' && password !== '') {
        const message = `Registered new user: ${username}`;
        appendToTerminal(`> ${message}`);
        saveToLocalStorage(username, password); // Simpan data ke local storage
        redirectToLogin(); // Panggil fungsi untuk mengarahkan ke halaman login
        clearInputs();
      } else {
        appendToTerminal('> Please enter username and password.');
      }
    });
  
    function appendToTerminal(text) {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      terminalBody.appendChild(paragraph);
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  
    function clearInputs() {
      usernameInput.value = '';
      passwordInput.value = '';
    }
  
    function saveToLocalStorage(username, password) {
      // Mendapatkan data pengguna yang sudah ada atau membuat array baru jika kosong
      const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
  
      // Menambahkan pengguna baru ke dalam array data pengguna
      const newUser = {
        username: username,
        password: password
      };
      usersData.push(newUser);
  
      // Menyimpan data pengguna ke dalam local storage dengan kunci 'usersData'
      localStorage.setItem('usersData', JSON.stringify(usersData));
    }
  
    function redirectToLogin() {
      setTimeout(function() {
        window.location.href = '/index.html'; // Ganti dengan URL halaman login
      },); // Contoh: Redirect ke halaman login setelah 2 detik
    }
  });
  