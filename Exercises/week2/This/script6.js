/*
const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType]==undefined){
    console.log("Sorry, we don't make " + drinkType )
     } else {
      this.beans -= this.drinkRequirements[drinkType]
//      console.log(this.beans)
     }
     if (this.beans < 0) {
      this.beans =+ this.drinkRequirements[drinkType]
      console.log("Sorry, we're all out of beans")
     }
  }
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
*/

/*
const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType]==undefined){
    console.log("Sorry, we don't make " + drinkType )
     } else {
      this.beans -= this.drinkRequirements[drinkType]
     }
     if (this.beans < 0) {
      this.beans += this.drinkRequirements[drinkType]
      console.log("Sorry, we're all out of beans")
     }
  },

  money: 100,
  buyBeans: function (numBeans) {
    const beansPrice = 2
    this.money -= numBeans * beansPrice
    this.beans += numBeans
  }

}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(30);
coffeeShop.makeDrink("frenchPress");

*/

const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 2.5},
    doubleShot: {beanRequirement: 15, price: 7.5},
    frenchPress: {beanRequirement: 12, price: 6}
  },

  makeDrink: function (drinkType) {
    let isDrink = this.drinkRequirements[drinkType]===undefined
    if (isDrink){
    console.log("Sorry, we don't make " + drinkType )
    return false
     } else {
      this.beans -= this.drinkRequirements[drinkType].beanRequirement
     }
     if (this.beans < 0) {
      this.beans += this.drinkRequirements[drinkType].beanRequirement
      console.log("Sorry, we're all out of beans")
      this.buyBeans(30)
     }
     return true
  },

  money: 100,
  moneys: function(drinkType){
    if (this.makeDrink(drinkType)){

    this.money += this.drinkRequirements[drinkType].price;
    let s = "you has sold " + drinkType +" for " + this.drinkRequirements[drinkType].price + ";"
    let s1 = " Your money account has " + this.money + "$"
    let s2 = " You have " + this.beans + " beans"
    console.log( s + s1 + s2)
    }

  } ,
  buyBeans: function (numBeans) {
    const beansPrice = 2
    this.money -= numBeans * beansPrice
    this.beans += numBeans
  }

}

coffeeShop.moneys("latte"); 
coffeeShop.moneys("americano");
coffeeShop.moneys("filtered"); 
coffeeShop.moneys("doubleShot");
coffeeShop.moneys("frenchPress"); 
coffeeShop.makeDrink("frenchPress");