var numbers = [15 , 22 , 48 , 37];
var words   = ["Be Strong" ,"Be Powerful","Be Kind" , " Be fearless" ,"Be humble" ,
"Be You"];


 
 
var j = 0;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);
    
    for(var i = 0; i<4; i++){
        ellipse((i+1)*100,200,numbers[i],numbers[i]);
    }
    
    fill(162, 4, 234);
    textSize(34);
    text(words[j] ,230,150);
    
   
    
}


function mousePressed(){
    j += 1;
    if(j==6){
        j=0;
    }
}

