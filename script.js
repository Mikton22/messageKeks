let messageTemplate = document.querySelector('#message-template').content;
let sendForm = document.querySelector('.chat-form');
let inputField = sendForm.querySelector('.chat-form-input');
let chat = document.querySelector('.chat-content');

let sendMessage = function (messageTemplate, inputField) {
    let newMessage = messageTemplate.cloneNode(true)
    let messageText = newMessage.querySelector('.chat-message-text');
    messageText.textContent = inputField.value;
    inputField.value = '';

    addDeleteHandler(newMessage);
    chat.appendChild(newMessage);
};

let addDeleteHandler = function (message) {
    let deleteButton = message.querySelector('.chat-message-button');
    let chatMessage = message.querySelector('.chat-message');

    deleteButton.addEventListener('click', function () {
        chatMessage.remove();
    });
};

sendForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    sendMessage(messageTemplate, inputField);
});


