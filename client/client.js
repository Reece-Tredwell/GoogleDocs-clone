const socket = new WebSocket("ws://localhost:6969");

socket.addEventListener("open", (event) => {
    console.log("Connection Established");
    getMessage()
});

const form = document.getElementById('myForm');
const input = document.getElementById('text');

form.addEventListener('input', (e) => {
    e.preventDefault();
    handleInput(input.value);
});

getMessage()

function getMessage() {
    socket.onmessage = (event) => {
        console.log(event.data);
        input.value = event.data
    };
}

function handleInput(value) {
    console.log("Input value:", value);
    socket.send(value)
}
