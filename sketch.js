//Create variables here
var happyDog, dog, database, foodS, Dog, addFoodButton,feedButton, foodObj, fedTime, lastFed;

function preload()
{
  //load images here
  happyDog=loadImage("images/dogImg1.png");
  dog=loadImage("images/dogImg.png");

}

function setup() {
  createCanvas(1200, 600);
  database=firebase.database();
  //console.log(database);

 Dog=createSprite(1050,300,10,10);
 Dog.addImage(dog);
 Dog.scale=0.2;

 foodObj=new Food();
 

 addFoodButton=createButton('Add food');
 addFoodButton.position(1050,70);
 addFoodButton.mousePressed(addFood);

 feedButton=createButton('Feed Dog');
 feedButton.position(900,70);
 feedButton.mousePressed(fedDog);

 foodStock=database.ref('Food');
 foodStock.on("value", function(data){
   foodS=data.val();
   foodObj.updateFoodStock(foodS);
 });



}


function draw() {  
  background("green");  
  drawSprites();

  textSize(24);
  fill("red");
  text("Scroll Right ->->", 150, 30)
  

  fedTime=database.ref('FeedTime');
  fedTime.on("value", function(data){
    lastFed=data.val();
  });

  fill(255);
  textSize(20);
  if(lastFed>=12){
    text("Last fed: "+lastFed%12+"PM", 500, 20);
  }else if(lastFed===0){
    text("Last fed: "+lastfed+"AM", 500, 20)
  }
  
  foodObj.display();


  drawSprites();

  }

  function fedDog(){
    dog.addImage(happyDog);
    database.ref("/").update({
      Food:foodObj.getFoodStock(),
      FeedTime:hour()  
    });
  }

  function addFood(){
    foodS++;
    database.ref('/').update({
      foodStock:foodS
    });   
  }





 


