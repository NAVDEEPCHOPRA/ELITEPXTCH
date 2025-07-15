const firebaseConfig = {
    apiKey: "AIzaSyCTlEFfOb9LfDNw2EYHnnrme0AOKcCCNMI",
    authDomain: "login-30b72.firebaseapp.com",
    projectId: "login-30b72"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('google-signin-btn');
    if (signInBtn) {
        signInBtn.addEventListener('click', () => {
            auth.signInWithPopup(provider)
                .then(result => {
                    const user = result.user;
                    alert("Signed in: " + user.displayName);
                })
                .catch(error => {
                    alert("Sign-in failed: " + error.message);
                });
        });
    }

    document.querySelectorAll('.button').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const rect = btn.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height)}px`;
            btn.appendChild(ripple);
            ripple.addEventListener('animationend', () => ripple.remove());
        });
    });
});

// Navigation
function redirectToPage() {
    window.open('another-page.html', '_blank');
}
function AI() {
    window.open('advanced-ai.html', '_blank');
}
function ELITE() {
    window.open('elite.html', '_blank');
}
