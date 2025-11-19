document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const messagesDisplay = document.getElementById('messagesDisplay');



    sendMessageBtn.addEventListener('click', () => {
        const messageText = messageInput.value.trim(); // Get message and remove whitespacemerge
        if (messageText !== '') { // Only send if message is not empty
            const messageElement = document.createElement('div');
            messageElement.classList.add('sent-message');
            messageElement.textContent = messageText;
            messagesDisplay.appendChild(messageElement);

            messageInput.value = ''; // Clear the input field
        }
    });
});