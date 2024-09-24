// Default parameter---------------------------------------------
// class Chair{
//     constructor(public price: number,public material: string = "Wood"){
//         this.price = price;
//         this.material = material;
//     }
// }

// var c1 = new Chair(1200,"Metal");
// var c2 = new Chair(1500);
// console.log(c1);
// console.log(c2);

//Optional Parameter----------------------------------------------
// class Chair{
//     constructor(public price: number,public material: string = "Wood",public GSTNo?: string){
//         this.price = price;
//         this.material = material;
//     }
// }

// var c1 = new Chair(1200,"Metal","20IND5411");
// var c2 = new Chair(1500);
// console.log(c1);
// console.log(c2);

//readonly-------------------------------------------------
// class Chair{
//     constructor(public readonly price: number,public material: string = "Wood"){
//         this.price = price;
//         this.material = material;
//     }
// }

// var c1 = new Chair(1200,"Metal");
// // c1.price=1500; throws error
// console.log(c1.price);

//Setter and getter------------------------------------
// class Chair{
//     constructor(private _price: number,public material: string = "Wood"){
//         this._price = _price; // this underscore is just for understanding there is no specific rule
//         this.material = material;
//     }
//    public set price(newPrice: number){
//     this._price = newPrice;
//    }
//    public get price(){
//     return this._price;
//    }
// }
    
// var c1 = new Chair(1200,"Metal");
// console.log(c1.price);
// c1.price = 45000;
// console.log(c1.price);

//static parameter------------------------------------------------
class Chair{
    public static GSTNo: string = "IND65646215MH5454854";
    constructor(public price: number, public material: string){}
}

var c1 = new Chair(1200,"Wood");
console.log(Chair.GSTNo); 
Chair.GSTNo = "692844";
console.log(Chair.GSTNo);