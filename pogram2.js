// change password

// let oldpass, newpass, confpass;
// oldpass = prompt('enter your old password')
// newpass = prompt('enter your new password')
// confpass = prompt('enter your conform password')

// if (oldpass == newpass) {
//     console.log('password is already exit');
// } else {
//     if (newpass != confpass) {
//         console.log('password is not same');

//     } else {
//         console.log('password is successfully chnaged....!');

//     }
// }

// pogram 1 

// let unit;
// unit = Number(prompt("enter your unit "));

// if (unit <= 100) {
//     console.log("Your charged a minimuum 50 rs")
// }
// else if (unit >= 100 && unit < 200) {
//     console.log("Your charged 60p.");
// }
// else if (unit >= 200 && unit < 300) {
//     console.log("Your charged 80p.");
// }
// else if (unit >= 300 ) {
//     console.log("Your charged 90p.");
// }
// else {
//     console.log("your surcharger 15 % add.");
// }


// pogram 2

// let age;

// age = prompt('Enter your age');

// if (age >= 18) {
//     console.log('person eligible for vote');
// }
// else {
//     console.log('person is not valid....!');
// }


// pogram 3

// let salary;

// salary = prompt('enter  your salary');

// if (salary >= 5000) {
//     console.log('HRA salary is : ', salary * 0.08);
//     console.log('DA salary is : ', salary * 0.20);
// } else if (salary >= 5000 && salary < 10000) {
//     console.log('HRA salary is : ', salary * 0.12);
//     console.log('DA salary is : ', salary * 0.30);
// } else if (salary >= 10000 && salary < 15000) {
//     console.log('HRA salary is : ', salary * 0.15);
//     console.log('DA salary is : ', salary * 0.40);
// } else if (salary >= 15000) {
//     console.log('HRA salary is : ', salary * 0.20);
//     console.log('DA salary is : ', salary * 0.50);
// }
// else {
//     console.log('salary does not existed')
// }


// pogram 4

let income;

income = prompt('enter  your income');

if (income <= 2500) {
    console.log('Tax free: ');
} else if (income >= 2500 && income < 5000) {
    console.log('slab 2 is : ', (income - 2500) * 0.10);
} else if (income >= 5000 && income < 10000) {
    console.log('slab 3 is : ', ((income - 5000) * 0.20 + 250));
} else if (income >= 10000) {
    console.log('slab 4 is : ', income * 0.30);
}
else {
    console.log('income does not existed')
}

// pogram 5

// let marks;
// marks = Number(prompt("enter your mark "));
// if (marks >= 75) {
//     console.log("Your grade is A")
// }
//  else if (marks >= 60 && marks < 75) {
//     console.log("Your grade is B");
// }
// else if (marks >= 45 && marks < 60) {
//     console.log("Your grade is C");
// }
// else if (marks >= 35 && marks < 45) {
//     console.log("Your grade is D");
// }
//  else {
//     console.log("you are fail");
// }
