var canvas;
var backgroundImage, bgImg, carroimg1, carroimg2, estradaimg;
var database, gameState;
var form, player, playerCount;
var allPlayers, carro1, carro2;
var carros = [];

function preload() {
  backgroundImage = loadImage("planodefundo.png");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
 
  background(backgroundImage);
  
  //código para que se houver dois players, o jogo atualizar e começar.
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
