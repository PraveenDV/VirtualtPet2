class Food{
    constructor(){
        this.image=loadImage("images/Milk.png");
         this.foodStock=0;
         this.lastFed;
    
    }

    
    getFoodStock(foodStock){
        this.foodStock=database.ref('Food');
        
    }
   

    updateFoodStock(foodStock){
        
            this.foodStock=foodStock; 
    }

    deductFood(foodStock){
       if(this.foodStock>0){
           this.foodStock=this.foodStock-1;
       }

         
    }

  

   

    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,620,220,70,70);

        if(this.foodStock!=0){
            for(var i; i<this.foodStock; i++){
                if(this.foodStock%10===0){
                    x=80;
                    y=y+50;
                }

                image(this.image,x,y,70,70);
                x=x+30;
            }
        }
       textSize(15)
       fill("white");
       text("Food remaining:"+this.foodStock, 500,100);
    }

}

