function toggleChatbot() {
  const bot = document.getElementById("chatbot");
  bot.style.display = bot.style.display === "block" ? "none" : "block";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatbot-body");
  const userText = input.value.trim();

  if (userText === "") return;

  // Message user
  chatBody.innerHTML += `<p><b>You:</b> ${userText}</p>`;

  // Answer (rule-based)
  let reply = "Saya bot SmartTrash 🤖";

  if (userText.toLowerCase().includes("status")) {
    reply = "Status tong: NORMAL ✅ (65% penuh)";
  } 
  else if (userText.toLowerCase().includes("location")) {
    reply = "Lokasi tong: Terengganu 📍";
  }
  else if (userText.toLowerCase().includes("penuh")) {
    reply = "Tong belum penuh lagi. Jangan risau 😄";
  }
  else if (userText.toLowerCase().includes("sensor")) {
    reply = "Sensor digunakan: Ultrasonic untuk ukur paras sampah 📡";
  }
  else {
    reply = "Saya faham soalan itu, tapi masih belajar 😅";
  }

  // answer bot
  setTimeout(() => {
    chatBody.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);

  input.value = "";
}
