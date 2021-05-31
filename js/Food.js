class Food{
    constructor(){
        this.foodStock = 0;
        this.image = loadImage('images/Milk.png');
        this.lastFet = 0;
    }
    getFoodStock(){
        return this.foodStock;
    }
    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }
    deductFood(){
        if(this.foodStock>0){
            this.foodStock-=1;
        }
    }
    display(){
        var x = 80;
        var y = 100;
        var f = this.foodStock;
        if(this.foodStock!=0){
            for(var i = 0; i < f; i++){
                if(i%10 == 0){
                    x = 80;
                    y+=50
                }
                image(this.image, x, y, 50,50);
                x+=30;
            }
        }
    }
}