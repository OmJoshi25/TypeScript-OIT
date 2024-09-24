// class Person{
//     constructor(public name: string, public age: number){}
//     getPersonDetails(): string{
//         return `Name: ${this.name}, Age: ${this.age}`;
//     }
// }
var SuperDancer = /** @class */ (function () {
    function SuperDancer(name, age, danceStyle) {
        this.name = name;
        this.age = age;
        this.danceStyle = danceStyle;
    }
    SuperDancer.prototype.getData = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", Dance Style: ").concat(this.danceStyle);
    };
    return SuperDancer;
}());
var sd1 = new SuperDancer("om", 21, "classical");
console.log(sd1.getData());
