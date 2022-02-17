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
}

function modalLoaded() {
    console.log("PoseNet has been initialized!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}