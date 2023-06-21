# Ping-Pong

<figure>
    <img src="https://i.ibb.co/p0zDD5V/Screenshot-2023-06-21-12-36-41.png" style="width: 100%">
    <figcaption style="text-align: center">Ping-Pong</figcaption>
</figure>

This is an implementation of the classic Ping-Pong game using Javascript. Two players compete against each other by hitting the ball with their paddles.

## System requirements

This will run in any major web browser such as Google Chrome, Mozilla Firefox, or Microsoft Edge. To run it, your browser must have WebGL enabled. 

## How to host on your own machine

Make sure you have Git, Node.js, and NPM installed and in your PATH.

1. Clone the repository:

````
git clone https://github.com/chasc0des/ping-pong.git
cd ping-pong
````

2. Install Node.js packages

````
npm install .
````

3. Run app.js

````
node app.js
````

4. The game should be accessible from your machine at `http://localhost:8080`, and other devices on your local network as `http://<YOUR LOCAL IP ADDRESS>:8080`.

## Controls

* UP/DOWN arrow keys to move paddles
* Q to pause game

## Features

|Feature|Implemented|Date|
|-------|-----------|----|
|Scale to window size|Yes|21/06/2023|
|Barriers|Partially|21/06/2023
|Physical two-player|Yes|21/06/2023|
|Network two-player|No|
|Title screen|No|
|Progressive difficulty|No|

## Rules

The objective of Ping-Pong is to score points by getting the ball to pass your opponent's paddle.

The ball will randomly change direction whenever it hits a paddle.

## Acknowledgements

* Inspired by classic Ping-Pong game.
* Built with <a href="kaboomjs.com">Kaboom.js</a> game engine.
* Uses <a href="https://fonts.google.com/specimen/Teko">Teko</a> font.
* Written by <a href="https://github.com/chasc0des">chasc0des</a>.
