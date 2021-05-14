var snake, snakeImage;
var apple, appleImage;
var evilApple, evilAppleImage;
var background, backgroundImage;

function preload(){
    snakeImage = loadImage("images/snake.png");
    appleImage = loadImage("images/apple.png");
    evilAppleImage = loadImage("images/purpleapple.png");
    backgroundImage = loadImage("images/background.png");
}

function setup(){
    createCanvas(400,400)

    snake = createSprite(200,200,20,20);
    snake.addImage(snakeImage);
}

function draw(){
    background(backgroundImage)

    if (keyDown(RIGHT_ARROW)){
        snake.velocityX = 10
    }
    if (keyDown(LEFT_ARROW)){
        snake.velocityX = -10
    }
    if (keyDown(DOWN_ARROW)){
        snake.velocityY = 10
    }
    if (keyDown(UP_ARROW)){
        snake.velocityY = -10
    }
    drawSprites();
}