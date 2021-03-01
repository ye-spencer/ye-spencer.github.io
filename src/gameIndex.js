var canvas = document.getElementById("gameCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 100;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

var topScore = 0;
var lastSpeed = 0;

const paddleSpeed = 7;
console.log("program started")
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/*
ERRORS: NONE
*/
/*
IDEAS:
Have a global best score
*/

var points = 0;

function keyDownHandler(key) 
{
	if(key.key == "Right" || key.key == "ArrowRight")
	{
		rightPressed = true;
		console.log("Right True");
	}
	else if (key.key == "MoveLeft" || key.key == "ArrowLeft") 
	{
		leftPressed = true;
		console.log("Left True");
	}
	console.log(key.key);
}

function keyUpHandler(key) 
{
	if(key.key == "Right" || key.key == "ArrowRight") 
	{
		rightPressed = false;
	}
	else if (key.key == "MoveLeft" || key.key == "ArrowLeft") 
	{
		leftPressed = false;
	}
}

function drawBall() 
{
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fillStyle = "#0099DD";
	ctx.fill();
	ctx.closePath();
}
function drawPaddle() 
{
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#0099DD";
	ctx.fill();
	ctx.closePath();
}
function drawScore() 
{
	ctx.font = "16px Arial";
	ctx.fillStyle = "#000000";
	ctx.fillText("Score: " + points, 8, 200);
	lastSpeed = Math.max(lastSpeed, Math.sqrt(Math.pow(dx, 2) + Math.sqrt(Math.pow(dy, 2))))
	ctx.fillText("Speed: " + lastSpeed.toFixed(2), 8, 40);
}
function draw() 
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	drawPaddle();
	drawScore();

	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) 
	{
		dx = -dx;
	}
	if (y + dy < ballRadius)
	{
		dy = -dy;
	}
	else if (y + dy > canvas.height - ballRadius) 
	{
		if(x > paddleX && x < paddleX + paddleWidth) 
		{
			points++;
			dy = -dy;
		}
		else 
		{
			alert("GAME OVER \n CLICK 'OK' TO PLAY AGAIN");
			x = Math.floor(Math.random() * canvas.width) + ballRadius;
			y = Math.floor(Math.random() * canvas.height) + ballRadius;
			dx = 2;
			dy = -2;
			if (points > topScore)
			{
				topScore = points
			}
			points = 0;
			lastSpeed = 0;
			rightPressed = false;
			leftPressed = false;
		}
	}

	if (rightPressed) 
	{
		paddleX += paddleSpeed;
		if (paddleX + paddleWidth > canvas.width)
		{
			paddleX = canvas.width - paddleWidth;
		}
	}
	else if(leftPressed) 
	{
		paddleX -= paddleSpeed;
		if (paddleX < 0)
		{
			paddleX = 0;
		}
	}

	if (Math.random() < 0.56)
	{
		dx += Math.abs(dx) / dx * 0.001
	}
	else
	{
		dx -= Math.abs(dx) / dx * 0.001
	}
	if (Math.random() < 0.56)
	{
		dy += Math.abs(dy) / dy * 0.001
	}
	else
	{
		dy -= Math.abs(dy) / dy * 0.001
	}
	x += dx;
	y += dy;

}

setInterval(draw, 10);