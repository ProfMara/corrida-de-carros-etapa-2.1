class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.playButton = createButton("Jogar");
    this.titleImg = createImg("./titulo.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  mouseClicou() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = "Olá " + this.input.value() + "</br>espere o outro jogador entrar...";
      this.greeting.html(message);
     
      //código para aumentar o número de jogadores
     
      //comando para definir o nome do jogadore
     
      //código para definir o indice do player
      
      //código para adicionar o player

      //código para atualizar a quantidade jogadores no banco de dados
      
     
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.mouseClicou();
  }
}
