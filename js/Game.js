class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {

    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    //código para criar as sprites dos carros e colocá-los na matriz
  




  }

  play(){
    this.handleElements();
    
    //código para desenhar as sprites


  


     
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  
  update(state){
    database.ref("/").update({
      gameState:state
    })
  }
}
