const nameInput = document.getElementById('my-name-input')
const messageInput = document.getElementById('my-message-input')
const sendButton = document.getElementById('send-button')
const chatBox = document.getElementById('chat')

function formatchat (message, userNameInput){
  const time = new Date(message.timestamp);
  const readabletime = `${(time.getHours())}:${time.getMinutes()}`;

  if (userNameInput === message.sender)
  {
    return `
    <div class="mine messages">
    <div class="message">
      ${message.text}
      </div>
      <div class = "sender-info">
      ${readabletime}
      </div>
      </div>
    `
    //must use `when translating to html
  }
  else {
    return `
    <div class = "yours messages">
    <div class = "message">
    ${message.text}
    </div>
    <div class = "sender-info">
    ${message.sender} ${readabletime}
    </div>
    `
  }
}
const serverURL = `https://it3049c-chat.fly.dev/messages`;

function fetchMessages(){
  return fetch(serverURL)
  .then(response => response.json());
}
async function updateMessagesInChatBox(){
const arrayOfMessages = await fetchMessages();
let formatMessages = "";
arrayOfMessages.forEach((message) => {
  formatMessages += formatchat(message, nameInput.value)
});
//ask about logging messages variable in console?
chatBox.innerHTML = formatMessages
//+= simplified f = m + m
}
updateMessagesInChatBox();

function send(nameInput,formatMessages){
const JSonMessage =
  {
    text: formatMessages,
    sender: nameInput,
    timestamp: new Date()
  };
  fetch(serverURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(JSonMessage)
  })

const newMessage = formatchat(JSonMessage, nameInput)
chatBox.innerHTML += newMessage;
}

sendButton.addEventListener("click", function(event){
  event.preventDefault();
  const sender = nameInput.value
  const message = messageInput.value
  send( sender, message);
  messageInput.value = "";
});

setInterval(updateMessagesInChatBox, 10000);
//had to increase global timeout to 20 seconds to get last test to work




