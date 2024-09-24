// class Person{
//     constructor(public name: string, public age: number){}
//     getPersonDetails(): string{
//         return `Name: ${this.name}, Age: ${this.age}`;
//     }
// }

// class Employee extends Person{
//     constructor(public name: string, public age: number, public department: string) {
//         super(name, age);
//     }
//     getEmployeeDetails(){
//         return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}`;
//     }
// }

// class Manager extends Employee{
//     constructor(public name: string, public age: number, public department: string, public project: string){
//         super(name, age, department);
//     }
//     getManagerDetails(){
//         return `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}, Project: ${this.project}`;
//     }
// }

// class Student extends Person{
//     constructor(public name: string, public age: number, public rollno: number) {
//         super(name, age);
//     }
//     getStudentDetails(){
//         return `${this.getPersonDetails()}, Roll No: ${this.rollno}`;
//     }
// }

// let s1 = new Student("om",21,6043);
// console.log(s1.getStudentDetails());

// interface Person{
//     name: string;
//     age: number;
// }

// interface Dancer{
//     danceStyle: string;
// }

// class SuperDancer implements Person,Dancer {
//     constructor(public name: string, public age: number, public danceStyle: string){}
//     getData(){
//         return `Name: ${this.name}, Age: ${this.age}, Dance Style: ${this.danceStyle}`;
//     }
// }

// var sd1 = new SuperDancer("om",21,"classical");
// console.log(sd1.getData());

class ElectronicDevice{
    constructor(public deviceId: number){}
    getId(){
        return (`Device ID: ${this.deviceId}`);
    }
}

class Mobile extends ElectronicDevice{
    constructor(public deviceId: number, public mobileNumber: string){
        super(deviceId);
    }
    getMobileDetails(){
        return `${this.getId()}, Mobile Number: ${this.mobileNumber}`;
    }
}

class Computer extends ElectronicDevice{
    constructor(public deviceId: number, public ram: number, public processor: string){
        super(deviceId);
    }
    getComputerDetails(){
        return `${this.getId()}, RAM: ${this.ram}, Processor: ${this.processor}`;
    }
}

class Country{
    constructor(public countryName: string, public capital: string){}
    getCountryDetails(){
        return `Country Name: ${this.countryName}, Capital: ${this.capital}`;
    }
}

class State extends Country{
    constructor(public countryName: string, public capital: string, public stateName: string){
        super(countryName,capital);
    }
    getStateDetails(){
        return `${this.getCountryDetails}, State: ${this.stateName}`;
    }
}

class District extends State{
    constructor(public countryName: string, public capital: string, public stateName: string, public districtName){
        super(countryName, capital, stateName);
    }
    getDistrictDetails(): string{
        return `${this.getStateDetails()}, District: ${this.districtName}`;
    }
}

interface BankAccount{
    accountNumber: number;
}

interface ATM{
    pin: number;
}

class GooglePay implements BankAccount,ATM{
    constructor(public accountNumber: number, public pin: number){}
    printData(){
        console.log(`Account Number: ${this.accountNumber}, Pin: ${this.pin}`);
    }
}