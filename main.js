NoseX=0;
NoseY=0;
img="";
function preload(){
img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas=createCanvas(400, 400);
canvas.center();
video=createCapture(VIDEO);
video.size(400, 400);
video.hide();
poseNet=ml5.poseNet(video, modelloaded);
poseNet.on("pose", Getposes);
}
function Getposes(results){
    if(results.length>0){
        console.log(results);
        NoseX=results[0].pose.nose.x-20;
        NoseY=results[0].pose.nose.y;
        console.log(NoseX, NoseY);
    }
}
function modelloaded(){
    console.log("Model Is Ready");
}
function draw(){
image(video, 0,0, 400, 400);
image(img,NoseX, NoseY,30, 30);
}
function snapshot(){
save("yourpic.png");
}