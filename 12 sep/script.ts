interface Gola {
  x: number;
  y: number;
  r: number;
}

var circle: Gola = {x: 2, y: 3, r: 4};

function Area(c: Gola){
    console.log(`Area of given circle having coordinates (${c.x},${c.y}) with radius ${c.r} is ${3.14 * c.r * c.r}sq.cm`);
}

Area(circle);
Area({x: 3, y: 7, r: 2});

interface Animal{
    name: string;
}

interface Bear extends Animal{
    honey: boolean;
}

type animal = {
    name: string;
}

type bear = animal &{
    honey: boolean;
}

var b1: Bear = {name: "bhalu",honey: true};
var b2: bear = {name: "Bhalu",honey: false};
console.log(b1);
console.log(b2);

interface Hero{
    fly: boolean;
}

interface Hero{
    fastRunner: boolean;
}

var h1: Hero = {
    fly: true,
    fastRunner: true
}

type hero = {
    fly: boolean;
}

// type hero = { //error cannot add properties to same type which was previously declared
//     fastRunner: boolean;
// }