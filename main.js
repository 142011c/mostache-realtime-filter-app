function preload(){}

function setup(){
     canvas=createCanvas(700,650);
     canvas.center();
     video=createCapture(VIDEO);
     video.size(700,650);
     video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotposes);
}

 function modelLoaded(){
     console.log("modelLoaded");
 }

 function gotposes(results){
     if (results.length>0){
         console.log(results);
         console.log("nosex is"+results[0].pose.nose.x);
         console.log("nosey is"+results[0].pose.nose.y);
     }
 }

 function draw(){
     image(video,0,0,700,650);
 }

 function snap(){
     save('myselfie.png')
 }