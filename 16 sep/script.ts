// class chair{
//     public material: string = "wood";
//     public color: string = "black";
//     public price: number = 1200;
//     public noOfLegs: number = 4;
// }
// var c1=new chair();
// console.log(c1.color);
// console.log(c1.material);
// console.log(c1.price);
// console.log(c1.noOfLegs);

// class chair {
//   public material: string;
//   public color: string;
//   public price: number;
//   public noOfLegs: number;
//   constructor(
//     material: string,
//     color: string,
//     price: number,
//     noOfLegs: number
//   ) {
//     this.color = color;
//     this.material = material;
//     this.price = price;
//     this.noOfLegs = noOfLegs;
//   }
// }

// var c1 = new chair("wood", "black", 1200, 4);
// console.log(c1.color);
// console.log(c1.material);
// console.log(c1.price);
// console.log(c1.noOfLegs);

// class chair {
//   constructor(
//     public material: string,
//     public color: string,
//     public price: number,
//     public noOfLegs: number
//   ) {
//     this.color = color;
//     this.material = material;
//     this.price = price;
//     this.noOfLegs = noOfLegs;
//   }
// }

class chair{
    constructor(public material: string,protected price: number){
        this.price=price;
        this.material=material;
    }
    setPrice(v: number): void{
        this.price = v;
    }
}

class GamingChair extends chair{
    NewPrice(v: number): void{
        this.price = v;
    }
}

var c1 = new chair("wood",1200);
console.log(c1.material);
// console.log(c1.price); //error if private or protected
