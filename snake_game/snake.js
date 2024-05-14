// Get the canvas element and its context
let canvas = document.getElementById('gameCanvas');
let context = canvas.getContext('2d');

// Initialize the score
let score = 0;

// Define the size of each square (box) on the canvas
let box = 20;

// Initialize the snake as an array of objects with x and y coordinates
let snake = [];
snake[0] = { x: 10 * box, y: 10 * box };

// Initialize the obstacles as an array of objects with x and y coordinates
let obstacles = [
    { x: 5 * box, y: 7 * box },
    { x: 8 * box, y: 12 * box },
    { x: 13 * box, y: 15 * box },
    // Add more obstacles as needed
];

// Variable to store the current direction of the snake
let direction;

// Create a food object with random x and y coordinates
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

// Function to draw the obstacles on the canvas
function drawObstacles() {
    context.fillStyle = "gray";
    for (let i = 0; i < obstacles.length; i++) {
        context.fillRect(obstacles[i].x, obstacles[i].y, box, box);
    }
}

// Function to draw the game background
function createBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 20 * box, 20 * box);
}

// Function to draw the snake on the canvas
function createSnake() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

// Function to draw the food on the canvas
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

// Event listener for arrow keys to change the direction of the snake
document.addEventListener('keydown', update);

function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';
}

// Main game function
function startGame() {
    // Check if the snake has hit the canvas border
    if (snake[0].x > 19 * box && direction == 'right') snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 20 * box;
    if (snake[0].y > 19 * box && direction == 'down') snake[0].y = 0;
    if (snake[0].y < 0 && direction == 'up') snake[0].y = 20 * box;

    // Check if the snake has hit itself
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(game);
            alert('Game Over!');
        }
    }

    // Draw the game elements on the canvas
    createBG();
    createSnake();
    drawFood();
    drawObstacles(); // Draw the obstacles

    // Get the current head position of the snake
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Determine the new head position based on the current direction
    if (direction == 'right') snakeX += box;
    if (direction == 'left') snakeX -= box;
    if (direction == 'up') snakeY -= box;
    if (direction == 'down') snakeY += box;

    // Check if the snake has eaten the food
    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor(Math.random() * 15 + 1) * box,
            y: Math.floor(Math.random() * 15 + 1) * box
        };
    } else {
        // Remove the last part of the snake
        snake.pop();
    }

    // Check if the snake has hit an obstacle
    for (let i = 0; i < obstacles.length; i++) {
        if (snakeX == obstacles[i].x && snakeY == obstacles[i].y) {
            clearInterval(game);
            alert('Game Over!');
        }
    }

    // Create the new head of the snake
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    // Add the new head to the front of the snake
    snake.unshift(newHead);

    // Update the score display
    document.getElementById('score').innerHTML = 'Score: ' + score;
}

// Start the game loop
let game = setInterval(startGame, 100);