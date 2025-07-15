const firebaseConfig = {
  apiKey: "AIzaSyCTlEFfOb9LfDNw2EYHnnrme0AOKcCCNMI",
  authDomain: "login-30b72.firebaseapp.com",
  projectId: "login-30b72"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('google-signin-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      auth.signInWithPopup(provider)
        .then(result => {
          const user = result.user;
          alert(`Welcome, ${user.displayName}!`);
        })
        .catch(error => {
          if (error.code === 'auth/popup-blocked') {
            alert("Popup was blocked. Please allow popups and try again.");
          } else {
            alert("Sign-in failed: " + error.message);
          }
        });
    });
  }
});

function redirectToAIPage() {
  window.location.href = "ai-page.html";
}
