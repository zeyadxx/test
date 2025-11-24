const socket = io('http://localhost:3000');
const input = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', () => {
  const msg = input.value.trim();
  if (msg !== '') {
    socket.emit('message', msg);
    input.value = '';
  }
});

socket.on('message', (msg) => {
  const div = document.createElement('div');
  div.textContent = msg;
  messages.appendChild(div);
});

socket.on('typing', () => {
  console.log(' Someone is typing...');
});
// edit 
// edit 2
