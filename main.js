noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(475,450);

    canvas = createCanvas(475,450);
    canvas.position(700,110);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('Model Loaded!');
}

function draw()
{
    background('#8ccdff');
    document.getElementById("square_side").innerHTML = "Width and height of the square ="+difference+"px";
    fill('red');
    stroke('blue');
    square(noseX,noseY,difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results [0].pose.nose.x;
        noseY = results [0].pose.nose.y;
        console.log("noseX ="+noseX+"noseY ="+noseY);
        leftWristX = results[0].pose.leftWrist.x; rightWristX = results[0].pose.rightWrist.x; difference = floor(leftWristX - rightWristX); console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);    }
}

