var messageTemplate = document.querySelector('#message-template').content;
var sendForm = document.querySelector('.chat-form');
var inputField = sendForm.querySelector('.chat-form-input');
var chat = document.querySelector('.chat-content');

var sendMessage = function (messageTemplate, inputField) {
    var newMessage = messageTemplate.cloneNode(true)
    var messageText = newMessage.querySelector('.chat-message-text');
    messageText.textContent = inputField.value;
    inputField.value = '';

    addDeleteHandler(newMessage);
    chat.appendChild(newMessage);
};

var addDeleteHandler = function (message) {
    var deleteButton = message.querySelector('.chat-message-button');
    var chatMessage = message.querySelector('.chat-message');

    deleteButton.addEventListener('click', function () {
        chatMessage.remove();
    });
};

sendForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    sendMessage(messageTemplate, inputField);
});
