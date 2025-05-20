import asyncio
import websockets
import sys

async def chat():
    async with websockets.connect('ws://localhost:6969') as websocket:
        while True:
            message = input("Enter message: ")
            input_string = sys.argv[1]
            await websocket.send(input_string + ": " + message)
            response = await websocket.recv()
            print(f"{response}")

if __name__ == "__main__":
    asyncio.run(chat())