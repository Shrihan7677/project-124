function setup(){
video = createCapture(VIDEO);
video.size(450,450);
video.position(10,50);

canvas = createCanvas(400,400);
canvas.position(600,130);
}
posenet = ml5.posenet(video,modelDone);
posenet.on('pose', gotPoses);

function modelDone(){
    console.log("PoseNet Is Initialized And Loaded");
}

function draw(){
    background("#2596be")
}

function gotPoses(results, error){
if(error){
console.error(error);
}
if(results.length > 0){
console.log(results);

console.log("rightwrist_x = "+results[0].pose.rightWrist.x+"rightWrist_y = "+results[0].pose.rightWrist.y);
console.log("leftwrist_x = "+results[0].pose.leftWrist.x+"leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}