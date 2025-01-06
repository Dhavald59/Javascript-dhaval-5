// pogram 1

class School {
    constructor(name, email, contact) {
        this.name = name
        this.email = email
        this.contact = contact
    }
    Studant() {
        console.log("Studant name is :", this.name);
        console.log("Studant email :", this.email);
        console.log("Studant contact Number is :", this.contact);
    }
    Faculty() {
        console.log("Faculty name is :", this.name);
        console.log("Faculty email :", this.email);
        console.log("Faculty contact Number is :", this.contact);
    }
}

let StuDeatil = new School("Dhaval Desai", "dhavald@gmail.com", 1234567891);
StuDeatil.Studant();
let FacDeatil = new School("Girishsir", "Girishsir@gmail.com", 9472123446);
FacDeatil.Faculty();

// output :
// Studant name is : Dhaval Desai
// Studant email : dhavald@gmail.com
// Studant contact Number is : 1234567891
// Faculty name is : Girishsir
// Faculty email : Girishsir@gmail.com
// Faculty contact Number is : 9472123446


//////////////////////////////////////////////////////////

// pogram 2

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Employee extends Person {
//     constructor(name, age) {
//         super(name, age);
//     }

//     Perdetail() {
//         console.log("Person name is :", this.name);
//         console.log("Person age is :", this.age);
//     }
// }

// let data = new Employee("Dhaval", 20);
// data.Perdetail();

// output :
// Person name is : Dhaval
// Person age is : 20


//////////////////////////////////////////////////////////
// pogram 3

// class Employee{
//     constructor(SiMassges){
//         this.SiMassges = SiMassges;
//     }
//     sayMeassge(){
//         console.log(this.SiMassges);  
//     }
// }

// let Saysimple = new Employee("Hello Javascript.....");
// Saysimple.sayMeassge();

// output : Hello Javascript.....


//////////////////////////////////////////////////////////
// pogram 4

class Shape {
    constructor(radius, width, height) {
        this.radius = radius;
        this.width = width;
        this.height = height;
    }
    CircleArea() {
        console.log(3.14 * this.radius * this.radius);
    }


    RectangleArea() {
        console.log(this.width * this.height);
    }
}

let obj = new Shape(4);
obj.CircleArea();

let obj2 = new Shape(4, 5, 6);
obj2.rectangleArea();
//////////////////////////////////////////////////////////



// 1).

// class School {
//     constructor(name, email, number) {
//         this.name = name;
//         this.email = email;
//         this.number = number;
//     }
// }

// class Student extends School {
//     student() {
//         console.log("Student Name:", this.name);
//         console.log("Student Email:", this.email);
//         console.log("Student Number:", this.number);
//     }
// }

// class Faculty extends School {
//     faculty() {
//         console.log("Faculty Name:", this.name);
//         console.log("Faculty Email:", this.email);
//         console.log("Faculty Number:", this.number);
//     }
// }

// let obj = new Student("Manthan", "manthan@gmail.com", 8320664253);
// obj.student();

// let obj1 = new Faculty("Girish Sir", "girish@gmail.com", 7854256985);
// obj1.faculty();

