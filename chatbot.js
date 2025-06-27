const chatbotBtn = document.getElementById('chatbot-button');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

chatbotBtn.onclick = () => {
  chatbotWindow.style.display = chatbotWindow.style.display === 'flex' ? 'none' : 'flex';
  chatbotWindow.style.display = 'flex';
};

chatbotSend.onclick = () => sendMessage();
chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const msg = chatbotInput.value.trim();
  if (!msg) return;

  appendMessage(msg, 'user');
  chatbotInput.value = '';

  setTimeout(() => respondTo(msg), 500);
}

function appendMessage(text, type) {
  const msgDiv = document.createElement('div');
  msgDiv.className = type + '-message';
  msgDiv.innerText = text;
  chatbotMessages.appendChild(msgDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function respondTo(message) {
  const lower = message.toLowerCase();
  let response = "I'm still learning! Could you rephrase or select one of the options above?";

  if (lower.includes('service')) {
    response = "We offer Website Development, AI/ML Solutions, Mobile Apps, and more.";
  } else if (lower.includes('e-commerce')) {
    response = "Yes, we specialize in secure, scalable e-commerce website development.";
  } else if (lower.includes('chatbot') || lower.includes('ai')) {
    response = "Absolutely! We build AI-powered chatbots and intelligent assistants.";
  } else if (lower.includes('custom software')) {
    response = "Yes, we develop tailored software based on your business needs.";
  } else if (lower.includes('contact') || lower.includes('email')) {
    response = "Write to us at info@shankhtech.com — We’ll be happy to assist you!";
  }

  appendMessage(response, 'bot');
}

function selectOption(option) {
  const optionsMap = {
    1: "What services do you offer?",
    2: "Do you build e-commerce websites?",
    3: "Do you provide AI or Chatbot solutions?",
    4: "Do you provide custom software development?",
    5: "How can I contact you?"
  };
  chatbotInput.value = optionsMap[option];
  sendMessage();
}
