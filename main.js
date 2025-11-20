function sendMessage(isMe = true){
    const input = document.querySelector('input');
    const content = document.querySelector('.content');
    const message = input.value.trim();

    if (message === "") return;

    const msgDiv = document.createElement('div');
    msgDiv.textContent = message;

    if (isMe){
        msgDiv.className = "message-right";
    } else {
        msgDiv.className = "message-left";
    }

    content.appendChild(msgDiv);
    content.scrollTop = content.scrollHeight;
    input.value = "";
};
document.querySelector('button').addEventListener('click', sendMessage);
document.querySelector('input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});