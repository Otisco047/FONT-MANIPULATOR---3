nose_x = "";
nose_y = "";
lwx = "";
rwx = "";

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();
    poseNET = ml5.poseNet(video, modelLoaded)
}

function modelLoaded() {
    console.log("poseNET is initialized");
    poseNET.on("pose", getResults);
}

function getResults(result) {
    if (result.length > 0) {
        console.log(result);
        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;
        lwx = result[0].pose.leftWrist.x;
        rwx = result[0].pose.rightWrist.x;
    }
}

function draw() {
    background("yellow");
    textSize(25);
    text("Otis", nose_x, nose_y);
}