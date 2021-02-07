var state = "guess" 
function preload(){
  
 
}

function setup() {
  createCanvas(800,400);

  innc1 = createButton("88 + 888 + 8 + 8")
  innc1.position(200, 100)
  innc1.mousePressed(inn) 
  
  cor = createButton("888 + 88 + 8 + 8 + 8")
  cor.position(200, 133)
  cor.mousePressed(yee) 

  innc2 = createButton("88 + 88 + 8 + 8 + 88")
  innc2.position(200, 166)
  innc2.mousePressed(inn) 

  innc3 = createButton("888 + 88 - 8 + 8 + 8")
  innc3.position(200, 200)
  innc3.mousePressed(inn) 
}

function draw() {
  background("pink");  
 textSize(20)
  text("How can you add eight 8's to get the number 1,000? (only use addition)", 100, 50)
  
  if(state == true){
    
    textSize(50)
    fill("lightgreen")
    text("Correct!", 300, 300)
    
  }
  else if(state == false){
    
    textSize(50)
    fill("red")
    text("Inncorrect!", 300, 300)
    text("Press R to try again!", 250, 350)
  }

 
}

function yee(){
  if(state == "guess"){
  state = true
  }
  

}

function inn(){
  if(state == "guess"){
  state = false
  }
}

function keyPressed(){
  if(keyCode == 82){
    state = "guess"
}
}

