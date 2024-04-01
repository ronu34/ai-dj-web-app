let song = null;
let leftWristX = null;
let leftWristY = null;
let rightWristX = null;
let rightWristY = null;

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modeLoaded);
    poseNet.on("pose",getPoses)
}

function draw() {
    image(video,0,0,600,500)
}

function play() {
    song.play();
    song.setVolume1(1);
    song.rate(1);
}

function modeLoaded() {
    console.log("Model Loaded");
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("Left wrist x = "+leftWristX+"\n left Wrist y = "+leftWristY);
    }
}