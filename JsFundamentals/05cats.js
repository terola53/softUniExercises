// function cats(inputArr) {
//     let catsArr = [];

//     class Cat {
//         constructor(name, age) {
//             this.name = name;
//             this.age = age;
//         }

//         // meow(name, age) {
//         //     console.log(`${name}, age ${age} says Meow`);
//         // }
//     }

//     for (const element of inputArr) {
//         let currentElement = element.split(' ');

//         let [name, age] = [currentElement[0], currentElement[1]];
//         catsArr.push(new Cat(name, age));
//     }
    
//     for (const element of catsArr) {
//         let entries = Object.keys(element);
//         console.log(entries);
//         console.log(`${element}`);
//     }
// }
// cats(['Mellow 2', 'Tom 5']);