//variables & constants
const socket = new WebSocket("ws://########:6969");//ServerIP
const form = document.getElementById('myForm');
const input = document.getElementById('text');

//functions
function getMessage() {
    socket.onmessage = (event) => {
        input.value = event.data
    };
}
function handleInput(value) {
    socket.send(value)
}


//eventListeners
socket.addEventListener("open", (event) => {
    console.log("Connection Established");
    getMessage()
});

form.addEventListener('input', (e) => {
    e.preventDefault();
    handleInput(input.value);
});
