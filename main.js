function preload(){}

function setup(){
    var canvas=createCanvas(600,600);
    canvas.position(350, 170);
    video=createCapture (VIDEO);
    video.hide();
}

function draw(){
    background("#ed0562")
    image(video,100,100,400,400);
    fill("yellow")
    rect(0,0,600,30)
    rect(0,0, 30, 600)
    rect(0, 570, 600, 30)
    rect(570, 0, 30, 600)
    fill("blue")
    circle(15, 15, 20)
    circle(585, 15, 20)
    circle(585, 585, 20)
    circle(15, 585, 20)
    fill("green")
    square(300, 5, 20)
    square(575, 300, 20)
    square(300, 575, 20)
    square(5, 300, 20)
    fill("baby pink")
    text("Swasti",300,550)
}

function take_snapshot(){
    save("swasti.png");
}