// Dummy user data
const users = [
    { username: 'student1', password: 'password1', role: 'student' },
    { username: 'instructor1', password: 'password1', role: 'instructor' },
    { username: 'admin1', password: 'password1', role: 'admin' }
];

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        showMessage(`Welcome, ${user.username}!`);
        // Perform actions based on user role, e.g., redirect to different pages
    } else {
        showMessage('Invalid username or password.');
    }
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Check if the username is already taken (not implemented in this example)
    // For a real application, you'd need to check this against your database

    // Dummy registration (not implemented in this example)
    showMessage('Registration successful. Please log in.');
}

function showMessage(message) {
    document.getElementById('message').innerText = message;
}
