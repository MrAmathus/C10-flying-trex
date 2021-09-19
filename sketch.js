var trex, trexrunning, ground, groundimage

function preload() {
    trexrunning = loadAnimation("trex1.png", "trex3.png", "trex4.png")
    groundimage = loadAnimation("ground2.png")
}

function setup() {
    createCanvas(800, 300)
    trex = createSprite(100, 100, 50, 50)
    trex.addAnimation("run", trexrunning)
    trex.scale = 0.5
    ground = createSprite(400, 280, 800, 20)
    ground.addAnimation("stop", groundimage)
}
function draw() {
    background("white")
    //gravity
    trex.velocityY = trex.velocityY + 0.8
    //stopthetrexfromfollingdown
    trex.collide(ground)

    ground.velocityX = -5
    if (ground.x < 1) {
        ground.x = ground.width / 2
    }
    //makingthetrexjumpwhenspaceispressed
    if (keyDown("space")) {
    trex.velocityY=-8                                
    }

    drawSprites()
}