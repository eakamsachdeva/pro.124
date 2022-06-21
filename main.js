function setup(){
    video=createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoded);
poseNet.on("pose",gotPoses);
}
function draw(){
    background("#696969");
}
function modelLoded(){
    console.log("model is loded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}