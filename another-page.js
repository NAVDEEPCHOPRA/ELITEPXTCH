// Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCTlEFfOb9LfDNw2EYHnnrme0AOKcCCNMI",
    authDomain: "login-30b72.firebaseapp.com",
    projectId: "login-30b72",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

document.getElementById('google-signin-btn').addEventListener('click', () => {
    auth.signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            alert("Signed in: " + user.displayName);
        })
        .catch(error => {
            alert("Sign-in failed: " + error.message);
        });
});

// Social Links
function goToInstagram() {
    window.open('https://www.instagram.com/nxvdppp/', '_blank');
}
function sendEmail() {
    window.open('mailto:navdeepchopra33@gmail.com', '_blank');
}
function goToDiscord() {
    window.open('https://discord.gg/wacbUmSd', '_blank');
}
function goToSnapchat() {
    window.open('https://www.snapchat.com/add/nxvdppp?share_id=_IWYGAkNiu8&locale=en-US', '_blank');
}
function goToYouTube() {
    window.open('https://www.youtube.com/@avengersnerd2310', '_blank');
}

// Device Info + Location
window.onload = function () {
    const deviceType = /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "PC";
    const footer = document.querySelector("footer");
    footer.innerHTML += `<p>You're using a ${deviceType} device.</p>`;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                footer.innerHTML += `<p>Your location: Latitude ${latitude.toFixed(2)}, Longitude ${longitude.toFixed(2)}</p>`;
            },
            () => {
                footer.innerHTML += `<p>Location access denied or unavailable.</p>`;
            }
        );
    } else {
        footer.innerHTML += `<p>Geolocation is not supported by your browser.</p>`;
    }
};
