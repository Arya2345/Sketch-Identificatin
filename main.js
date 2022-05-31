function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
 function clear1(){
     background("white");
 }
 function preload(){
     classifier=ml5.imageClassifier("DoodleNet");
 }
 function draw(){
     strokeWeight(12);
     stroke(0);
     if (mouseIsPressed){
         line(pmouseX,pmouseY,mouseX,mouseY); 
     }
 }
 function classifyCanvas(){
     classifier.classify(canvas,gotResults);
 }
 function gotResults(error,result){
     if (error){
         console.error(error);
     }
     console.log(result);
     document.getElementById("label").innerHTML="label: "+result[0].label;
     document.getElementById("confidence").innerHTML="confidence: "+Math.round(result[0].confidence*100)+"%";
     utterThis=new SpeechSynthesisUtterance(result[0].label);
     synth.speak(utterThis);

 }