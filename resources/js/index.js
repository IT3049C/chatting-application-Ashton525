const nameInput = document.getElementById('my-name-input')
const messageInput = document.getElementById('my-message-input')
const sendButton = document.getElementById('send-button')
const chatBox = document.getElementById('chat')

function formatchat (message, userNameInput){
  const time = new Date().message.timestamp
  const readabletime = `${(time.gethours())} + : + ${time.getMinutes()}`

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

function fetchMessages(){
  return  [
    {
      id: 1,
      text: "This app sucks",
      sender: "Steve Jobs",
      timestamp: 15347968285
    },
    {
      id: 2,
      text: "I am that richest",
      sender: "Bill Gates",
      timestamp: 153475782
    },
    {
      id: 3,
      text: "I am the scout here",
      sender: "Scout",
      timestamp: 15347812
    }
  ];
}
function updateMessagesInChatBox(){
  
}