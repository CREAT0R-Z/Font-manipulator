
leftwrist_x = 0;
rightwrist_x = 0;
difference = 0
function setup(){
 canvas = createCanvas(700, 500);
 canvas.position(780, 140);
 video = createCapture(VIDEO );
 video.position(60, 140);
 video.size(650, 570);
 posenet = ml5.poseNet(video, modelloaded);
 posenet.on("pose" , gotresults);
}
function modelloaded(){
    console.log("Success")
}
function gotresults(results){
   if(results.length > 0 ){
    console.log(results)
    
    leftwrist_x = results[0].pose.leftWrist.x;
    rightwrist_x = results[0].pose.rightWrist.x;
    difference = leftwrist_x - rightwrist_x;
   }
}
function draw(){
    background("white")
    fill("red");
    stroke("red");
    document.getElementById("size").innerHTML = "The size of the font is  " + difference ; 
    textSize(difference);
    text("My name is Zaid", 250, 250);
}