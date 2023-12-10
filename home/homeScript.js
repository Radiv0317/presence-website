document.addEventListener('DOMContentLoaded', function() {
  const logoutBtn = document.getElementById('logoutBtn');
  const absentBtn = document.getElementById('absentBtn');
  const terminalBody = document.getElementById('terminalBody');

  // Mendapatkan data pengguna dari local storage
  const userData = JSON.parse(localStorage.getItem('userData'));

  // Memeriksa apakah data pengguna ada dan menampilkan pesan salam sesuai dengan nama pengguna
  if (userData && userData.username) {
    const greeting = `Hello, ${userData.username}! This is your home page.`;
    const welcomeParagraph = document.createElement('p');
    welcomeParagraph.textContent = greeting;
    terminalBody.appendChild(welcomeParagraph);
  } else {
    const defaultGreeting = `Hello, User! This is your home page.`;
    const defaultWelcomeParagraph = document.createElement('p');
    defaultWelcomeParagraph.textContent = defaultGreeting;
    terminalBody.appendChild(defaultWelcomeParagraph);
  }

  logoutBtn.addEventListener('click', function() {
    // Lakukan aksi logout di sini, misalnya mengarahkan ke halaman logout atau membersihkan sesi
    // Contoh pengalihan ke halaman logout (ganti "logout.html" dengan halaman logout yang sesuai)
    window.location.href = '/logout/logout.html';
  });

  absentBtn.addEventListener('click', function() {
    markAttendance(userData.username);
  });

  function markAttendance(username) {
    const attendedUsers = JSON.parse(localStorage.getItem('attendedUsers')) || [];
    attendedUsers.push({ username: username, time: new Date().toLocaleString() });
    localStorage.setItem('attendedUsers', JSON.stringify(attendedUsers));
    appendToTerminal(`> Attendance marked at ${new Date().toLocaleString()}`);
  }

  function appendToTerminal(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    terminalBody.appendChild(paragraph);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }
});
