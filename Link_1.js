Status = "";
Image_1 = "";
Objects = [];
function preload(){
    Image_1 = loadImage('Bedroom.jpeg');
}
function setup(){
    Canvas = createCanvas(640, 420);
    Canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML = "Object Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded!");
    objectDetector.detect(Image_1, Got_Results);
    Status = true;
}
function Got_Results(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    Objects = results;
}
function draw(){
    image(Image_1, 0, 0, 640, 420);
    if(Status != ""){
        for(i = 0; i < Objects.length; i++){
            console.log(Objects);
            document.getElementById("Status").innerHTML = "Object Status: Detected!";
            document.getElementById("Objects").innerHTML = "Number of objects detected: " + Objects.length;
            fill('#fc0303');
            PC = floor(Objects[i].confidence * 100);
            console.log("Percentage: " + PC);
            text(Objects[i].label + " " + PC + "%", Objects[i].x + 5, Objects[i].y + 15);
            noFill();
            stroke('#fc0303');
            rect(Objects[i].x, Objects[i].y, Objects[i].height, Objects[i].width);
            //text("Hola!", 40, 40);
        }
    }
}
function Navigate(){
    window.location = "Home.html";
}