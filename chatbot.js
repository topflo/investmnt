document.addEventListener('DOMContentLoaded', function() {
    const chatbotIcon = document.getElementById('chatbotIcon');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatbotInput = document.getElementById('chatbotInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatbotMessages = document.getElementById('chatbotMessages');

    // Toggle chatbot window
    chatbotIcon.addEventListener('click', function() {
        chatbotWindow.classList.add('active');
    });

    closeChatbot.addEventListener('click', function() {
        chatbotWindow.classList.remove('active');
    });

    // Send message function
    function sendUserMessage() {
        const message = chatbotInput.value.trim();
        if (message) {
            // Add user message to chat
            addMessage(message, 'user');
            chatbotInput.value = '';

            // Simulate bot response (replace with actual API call)
            setTimeout(() => {
                addMessage('I am an AI assistant. For the live website, this will be integrated with a chatbot service like Dialogflow, IBM Watson, or a custom solution.', 'bot');
            }, 1000);
        }
    }

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${sender}`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Event listeners for sending messages
    sendMessage.addEventListener('click', sendUserMessage);
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });
}); 