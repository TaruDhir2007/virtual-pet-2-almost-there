class Food{
    constructor(){
  this.foodStock = 0;
  this.lastFed; 
 
    }

    updateFood(foodStock){
    this.foodStock = foodStock;
    }
    getFeedTime(lastFed){
     this.lastFed = lastFed;
    }
    getFoodStock(){
    return this.foodStock;
    }
    deductFood(){
    if(this.foodStock > 0){
        foodStock-=1;
    }}
    display() {
   /*   var x = 50;
      var y = 100;
    
      imageMode(CENTER);
image(this.image,  100, 100 , 100 , 100);

if(foodStock !== 0){
  for(var food = 0; food<this.foodStock; food += 1){
      if(food % 10 === 0){
       x = 50;
       y  = y + 30;
     }
       image(this.image , x, y , 100 , 100);
       x = x + 30;
 }
} 
 */

     }
    }
