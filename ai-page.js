const API_KEY = "AIzaSyCt2c-Zb7SyIqUQwj6a87AjuLYWXktFAqA";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

async function callGeminiAI() {
  const inputEl = document.getElementById("userInput");
  const outputEl = document.getElementById("aiOutput");
  const prompt = inputEl.value.trim();

  if (!prompt) {
    outputEl.innerHTML = '<p class="text-yellow-300 italic">Please enter a question!</p>';
    return;
  }

  outputEl.innerHTML = '<p class="text-blue-300 italic">Thinking... <i class="fas fa-spinner fa-spin"></i></p>';
  inputEl.value = "";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    const result = data.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ No response from AI.";
    outputEl.innerHTML = `<p><strong>You asked:</strong> ${prompt}<br><br>${result}</p>`;
  } catch (err) {
    outputEl.innerHTML = `<p class="text-red-400">Error: ${err.message}</p>`;
  }
}

window.onload = () => {
  document.getElementById("userInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      callGeminiAI();
    }
  });
};

// Device info detection
function updateDeviceInfo() {
  const deviceType = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ? "Mobile" : "PC";
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const ratio = screenWidth / screenHeight;
  document.documentElement.setAttribute('data-device-type', deviceType);
  document.documentElement.setAttribute('data-ratio', ratio.toFixed(2));

  let baseFontSize;
  if (deviceType === "Mobile" || screenWidth < 700) {
    baseFontSize = 15;
  } else if (ratio < 1) {
    baseFontSize = 16 + (ratio - 0.7) * 5;
  } else if (ratio > 2) {
    baseFontSize = 17 + (ratio - 2) * 2;
  } else {
    baseFontSize = 17 + (ratio - 1) * 2;
  }
  baseFontSize = Math.max(15, Math.min(22, baseFontSize));
  document.documentElement.style.fontSize = baseFontSize + "px";

  const footer = document.querySelector("footer");
  if (footer) {
    footer.innerHTML += `<p>You're using a ${deviceType} device (${screenWidth}x${screenHeight}, ratio: ${ratio.toFixed(2)}).</p>`;
  }
}
window.addEventListener('DOMContentLoaded', updateDeviceInfo);
window.addEventListener('resize', updateDeviceInfo);

// Matrix rain + starfield animations (copy your existing IIFEs here as-is)
