console.log("Console is for developers")
function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    
    canvas = createCanvas(550, 550);
    canvas.position(560,80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Posenet is Initialized");
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
    }
}
function draw(){
    background("gray");

}