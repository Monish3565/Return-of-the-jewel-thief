var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["9a474c26-8840-4b44-8d1d-e59cdf2fbdf9"],"propsByKey":{"9a474c26-8840-4b44-8d1d-e59cdf2fbdf9":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"yQ6V9VxF7UGNaWiFcuQEaDLu49.zhnZI","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9a474c26-8840-4b44-8d1d-e59cdf2fbdf9.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var diamond = createSprite(200,60);
diamond.setAnimation("animation_1");
var thief = createSprite(150,370,10,10);
thief.shapeColor ="blue";
var Laser1 = createSprite(100,305,200,5);
Laser1.shapeColor ="red";
Laser1.velocityY=-5;
var Laser2 = createSprite(310,70,200,5);
Laser2.shapeColor ="red";
Laser2.velocityY=5;
function draw() {
  background("white");
  
  createEdgeSprites();
  thief.bounceOff(edges);
  Laser1.bounceOff(edges);
  Laser2.bounceOff(edges);

  thief.velocityX=0;
  thief.velocityY=0;
  
 
 
    if (keyDown("UP_ARROW")) {
    thief.velocityY=-3;
    }
    if (keyDown("DOWN_ARROW")) {
    thief.velocityY=3;
    }
    if (keyDown("RIGHT_ARROW")) {
    thief.velocityX=3;
    }
    if (keyDown("LEFT_ARROW")) {
    thief.velocityX=-3;
    }
    
    if (thief.isTouching(Laser1)||thief.isTouching(Laser2)) {
    stroke("blue");
    textSize(30);
    fill("blue");
    text("Thief is caught", 100, 250);
    Laser1.setVelocity(0,0);
    Laser2.setVelocity(0,0);
    thief.setVelocity(0,0);
    }
    if (thief.isTouching(diamond)) {
    stroke("red");
    textSize(20);
    fill("red");
    text("diamond is stolen !!", 100, 130); 
    Laser1.setVelocity(0,0);
    Laser2.setVelocity(0,0);
    thief.setVelocity(0,0);
      
    }
    
  
  drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
