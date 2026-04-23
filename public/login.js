const form = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  messageDiv.textContent = '';

  const formData = new FormData(form);
  const payload = {
    username: formData.get('username'),
    password: formData.get('password')
  };

  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await response.json();
    if (response.ok && result.success) {
      messageDiv.textContent = result.message;
      messageDiv.style.color = '#15803d';
    } else {
      messageDiv.textContent = result.message || 'Login failed.';
      messageDiv.style.color = '#b91c1c';
    }
  } catch (error) {
    messageDiv.textContent = 'Unable to contact the server.';
    messageDiv.style.color = '#b91c1c';
  }
});
