var circle = { x: 2, y: 3, r: 4 };
function Area(c) {
    console.log("Area of given circle having coordinates (".concat(c.x, ",").concat(c.y, ") with radius ").concat(c.r, " is ").concat(3.14 * c.r * c.r, "sq.cm"));
}
Area(circle);
Area({ x: 3, y: 7, r: 2 });
var b1 = { name: "bhalu", honey: true };
var b2 = { name: "Bhalu", honey: false };
console.log(b1);
console.log(b2);
var h1 = {
    fly: true,
    fastRunner: true
};
// type hero = { //error cannot add properties to same type which was previously declared
//     fastRunner: boolean;
// }
