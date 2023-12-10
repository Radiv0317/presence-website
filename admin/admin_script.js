document.addEventListener('DOMContentLoaded', function() {
    const terminalBody = document.getElementById('terminalBody');
    const attendedUsersList = document.getElementById('attendedUsersList');
    const allUsersList = document.getElementById('allUsersList');
    const totalUsers = document.getElementById('totalUsers');
  
    // Fungsi untuk mendapatkan data pengguna yang telah absensi dari local storage
    function getAttendedUsersFromStorage() {
      const storedData = localStorage.getItem('attendedUsers');
      return storedData ? JSON.parse(storedData) : [];
    }
  
    // Fungsi untuk mendapatkan seluruh data pengguna dari local storage
    function getAllUsersFromStorage() {
      const storedData = localStorage.getItem('usersData');
      return storedData ? JSON.parse(storedData) : [];
    }
  
    // Menampilkan seluruh nama pengguna pada dashboard admin
    function displayAllUsers() {
      const allUsersData = getAllUsersFromStorage();
      allUsersData.forEach(function(user) {
        const listItem = document.createElement('li');
        listItem.textContent = user.username;
        allUsersList.appendChild(listItem);
      });
      totalUsers.textContent = allUsersData.length;
    }
  
    // Menampilkan daftar pengguna yang telah absensi
    function displayAttendedUsers() {
      const attendedUsersData = getAttendedUsersFromStorage();
      attendedUsersData.forEach(function(user) {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.username} - Attended at ${user.time}`;
        attendedUsersList.appendChild(listItem);
      });
      terminalBody.insertAdjacentHTML('beforeend', `<p>Total Users Attended: ${attendedUsersData.length}</p>`);
    }
  
    // Panggil fungsi untuk menampilkan data pengguna saat halaman dimuat
    displayAllUsers();
    displayAttendedUsers();
  });
  