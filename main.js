leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 200);

    canvas = createCanvas(600, 600);
    canvas.position(750, 150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#54e3a5");
    text("Notice (21-2-2022):" + "\nSneaky Steve stole" + "\na single salted sultana", 20, 150);
    textSize(difference/2);
}

function modalLoaded() {
    console.log("PoseNet has been initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = floor(results[0].pose.leftWrist.x);
        rightWristX = floor(results[0].pose.rightWrist.x);
        difference = leftWristX - rightWristX;
        console.log("Left Wrist X = " + leftWristX + ", Right Wrist X = " + 
        rightWristX + ", Difference = " + difference);
    }
}