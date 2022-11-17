//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// variaveis da raquete
let x = 5;
let y = 150;
let wRaquete = 10;
let hRaquete = 90;

// variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let wRaqueteOponente = 10;
let hRaqueteOponente = 90;
let velocidadeYOponente = 50;

// placar do jogo 
let meusPontos = 0;
let pontosOponente = 0;

let chanceDeErrar = 0;

// sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
}

let colidiu = false;

function setup() {
  createCanvas(600, 400);
  trilha.loop (0.1,1,0,3);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostrarRaquete (x,y);
  movimentaRaquete();
  verificaColisaoRaquete (x,y);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();      verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente)
  incluiPlacar ();
  marcaPonto ()
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
}

function mostrarRaquete (x,y){
  rect (x,y,wRaquete,hRaquete)
}

function movimentaRaquete (){
  if (keyIsDown (UP_ARROW))
   
    y -=10
  
  if (keyIsDown (DOWN_ARROW))
    
    y +=10
  }

function verificaColisaoRaquete(){
if (xBolinha - raio < x + wRaquete && yBolinha - raio < y + hRaquete && yBolinha + raio > yRaquete)
  velocidadeXBolinha *= -1
   raquetada.play ();
}

function verificaColisaoRaquete(x,y){
colidiu = collideRectCircle(x,y,wRaquete,hRaquete, xBolinha,yBolinha,diametro)
if (colidiu)
velocidadeXBolinha *= -1
   raquetada.play ();
}

function movimentaRaqueteOponente()
{  
  if (keyIsDown (87))
   
    yRaqueteOponente -=10
  
  if (keyIsDown (83))
    
    yRaqueteOponente +=10
}

function incluiPlacar (){
  stroke (255);
  textAlign (CENTER);
  textSize (16);
  fill (color (255,140,0));
  rect (150,10,40,20)
  fill (255)
  text (meusPontos,170,26);
  fill (color (255,140,0));
  rect (450,10,40,20);
  fill (255);
  text (pontosOponente,470,26);
}

function marcaPonto (){
 if (xBolinha > 590){
   meusPontos += 1;
   ponto.play ();
 }
  if (xBolinha < 10){
    pontosOponente += 1
    ponto.play ();
  }
  function calculaChanceDeErrar(){
   if (pontosOponente >= meusPontos){
     chanceDeErrar += 1
     if (chanceDeErrar >= 39){
       chanceDeErrar = 40
     } else {
       chanceDeErrar -= 1
       if (chanceDeErrar <= 35){
         chanceDeErrar= 35
       }
     }
   }
  }
}