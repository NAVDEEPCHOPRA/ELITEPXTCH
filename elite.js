// Firebase config
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.createElement('button');
  btn.className = 'signin-btn';
  btn.id = 'google-signin-btn';
  btn.innerHTML = `
    <span class="google-icon">
      <svg width="20" height="20" viewBox="0 0 20 20">
        <g>
          <path fill="#4285F4" d="M19.6 10.23c0-.68-.06-1.36-.18-2H10v3.79h5.48a4.68 4.68 0 0 1-2.03 3.07v2.55h3.28c1.92-1.77 3.03-4.38 3.03-7.41z"/>
          <path fill="#34A853" d="M10 20c2.7 0 4.97-.89 6.63-2.41l-3.28-2.55c-.91.61-2.07.97-3.35.97-2.57 0-4.75-1.74-5.53-4.07H1.09v2.56A10 10 0 0 0 10 20z"/>
          <path fill="#FBBC05" d="M4.47 11.94A5.99 5.99 0 0 1 4.1 10c0-.67.12-1.32.34-1.94V5.5H1.09A10 10 0 0 0 0 10c0 1.64.39 3.19 1.09 4.5l3.38-2.56z"/>
          <path fill="#EA4335" d="M10 3.96c1.47 0 2.78.51 3.81 1.51l2.86-2.86C14.97.89 12.7 0 10 0A10 10 0 0 0 1.09 5.5l3.38 2.56C5.25 5.7 7.43 3.96 10 3.96z"/>
        </g>
      </svg>
    </span>
    <span>Sign in with Google</span>`;
  document.body.appendChild(btn);

  const firebaseConfig = {
    apiKey: "AIzaSyCTlEFfOb9LfDNw2EYHnnrme0AOKcCCNMI",
    authDomain: "login-30b72.firebaseapp.com",
    projectId: "login-30b72",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  btn.addEventListener('click', () => {
    auth.signInWithPopup(provider)
      .then(result => {
        alert("Signed in: " + result.user.displayName);
      })
      .catch(error => {
        alert("Sign-in failed: " + error.message);
      });
  });
});

// Filter buttons by search
function filterButtons() {
  const query = document.getElementById('searchBar').value.toLowerCase();
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    if (!button.classList.contains('signin-btn')) {
      button.style.display = button.textContent.toLowerCase().includes(query) ? 'inline-block' : 'none';
    }
  });
}
