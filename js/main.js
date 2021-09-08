"use strict";
// let ARR = [];

// let draw = function () {
//     let usernem = document.querySelector("#fish").value,
//         match = document.querySelector("#uchrashuv").value,
//         paySum = document.querySelector("#pay").value,
//         date = new Date().getDate() + "." + (new Date().getMonth() + 1) + "." + new Date().getFullYear();

//     if (usernem !== "" && paySum !== "") {
//         let obj = {
//             usernem: usernem,
//             paySum: paySum,
//             match: match,
//             date: date,
//         };
//         ARR.push(obj);
//         inner();
//         usernem = document.querySelector("#fish").value = "";
//         match = document.querySelector("#uchrashuv").value = "";
//     } else {
//         alert("malumotlarni to'liq kiriting");
//     }
// };

// function inner() {
//     let tr = "";
//     let i = 0;
//     for (let td of ARR) {
//         i++;
//         tr += `
//             <tr>
//                 <td>${i}</td>
//                 <td>${td.usernem}</td>
//                 <td>${td.paySum}</td>
//                 <td>${td.match}</td>
//                 <td>${td.date}</td>
//             </tr>

//     `;
//     }
//     document.querySelector("#tbody").innerHTML = tr;
// }


// let btn = document.querySelector("#btn");



// btn.addEventListener("click", () => {
//     if (btn.classList.contains("focus")) {
//         btn.classList.remove("focus");
//     } else {
//         btn.classList.add("focus");

//     }
// });


// btn.addEventListener("click", () => {
//     btn.classList.toggle("focus");
// });

// let arr = [1,2,5,6,4,8,5,6,2,];





// let btns = document.querySelectorAll("button");

// btns.forEach((item, i) => {
//     item.addEventListener("click", () => {
//         console.log(i + 1);

//         if (item.classList.contains("focus")) {
//             item.classList.remove("focus");
//         } else {
//             item.classList.add("focus");
//         }
//         item.classList.add
//         ("focus");
//         let a = i;
//         btns.forEach((item, i) => {
//             if (i !== a) {
//                 item.classList.remove("focus");
//             }
//         });



//     });
// });




// Text.toLowrerCase()
// Text.Text

// index.of
// solise



// let obj = {
//     name: "saman",
//     age: 17,
//     isMarred: true
// };


// console.log(arr.sort());


// function sortArr(a, b) {
//     return a - b;


// }
// let arr = [2, 5, 8, 1, 11, 22];

// arr.sort(sortArr)

// console.log(arr);












//  containes nima -- focus degan classi bormi












// let buttons = document.querySelectorAll("button");
// // console.log(buttons);

// buttons.forEach()






// // console.log(button);
// // 



// let saman = (a, b) => {
//     saman();
//     b();
// };

// function foo(a, b, callcack) {
//     console.log(`${a} va ${b} sonlar yig'indisi ${a+b}`);
//     callcack();
// }

// foo(10, 20, function display() {
//     console.log("BU KEYIN ISHLAYDI");
// });




















// function hisob() {
//     let sonA = document.querySelector("#Ason").value,
//         sonB = document.querySelector("#Bson").value,
//         amal = document.querySelector("#amal").value,
//         result = 0;

//     if (sonA !== "" && sonB !== "") {
//         sonA = parseFloat(sonA);
//         sonB = parseFloat(sonB);
//         switch (amal) {
//             case "+":
//                 result = sonA + sonB;
//                 break;

//             case "-":
//                 result = sonA - sonB;
//                 break;

//             case "*":
//                 result = sonA * sonB;
//                 break;

//             case "/":
//                 result = sonA / sonB;
//                 break;

//             default:
//                 result = 0;
//                 break;
//         }
//     } else {
//         alert(" A va B sonni kiriting!");
//     }
//     document.querySelector("#display").innerHTML = result;
// }





















// let timer = setTimeout(function () {
//     console.log("hello");
// }, 3000);


// function logger() {
//     console.log("hello world");
// }

// const timer = setTimeout(logger, 2000);




// const btn = document.querySelector(".btn1");
// let timerID, i = 0;
// // btn.addEventListener("click", () => {
// //     function logger() {
// //         console.log("salom");
// //     }
// //     const timer = setTimeout(logger, 2000);
// // });



// btn.addEventListener("click", () => {

//     timerID = setInterval(() => {
//         console.log("samandar");
//         i++;
//     }, 1000);

//     if ( i===5){
//         clearInterval(timerID);
//     }


// });



// let i = 0;
// let id = setTimeout(function foo() {
//     i++;
//     console.log(i);
// });


// const startDate = new Date();
// for (let i = 0; i < 10000; i++) {
//     let a = i + 1;
//     console.log(a);
// }

// const endDate = new Date();

// // alert(endDate - startDate);
// let newa;
// let i = 0;
// let btn = document.querySelector(".btn1");

// btn.addEventListener("click", () => {



//     function foo() {
//         console.log("salom");
//         i++;
//     }

//     newa = setTimeout(foo, 1000);








//     // newa = setInterval(() => {
//     //     i++;
//     //     console.log("assalomu alaykum qalaysioz saman aka");
//     //     console.log(i);
//     // }, 1000);
//     // if (newa === 5) {

//     //     clearInterval(newa);
//     // };
// });




// let timer = 0,
//     i = 0,
//     btn = document.querySelector(".btn1");

// btn.addEventListener("click", () => {

//     timer = setInterval(() => {
//         console.log("salom");
//         i++;
//     }, 500);

// });



// let saman;
// let i = 0;


// let btn = document.querySelector(".btn1");

// btn.addEventListener("click", () => {
//     saman = setInterval(() => {

//         btn.style.paddingLeft = i++ + "px";
//         // btn.style.paddingRight = i++ + "px";
//         // btn.style.paddingBottom = i++ + "px";
//         // btn.style.borderRadius = i++ + "px";
//         // btn.style.fontSize = i++ + "px";
//         // if (i === 100) {
//         //     clearInterval(saman);
//         // } else if (i === 500) {
//         //     clearInterval(saman);
//         // } else if (i === 1000) {
//         //     clearInterval(saman);
//         // }

//     }, 0.0001);

// });












// let salom;
// let i = 0;
// let btn = document.querySelector(".btn1");

// btn.addEventListener("click", () => {
//     salom = setInterval(() => {
//         console.log("SALOM qalaysiz");
//         i++;
//     }, 500);
// });
















// let salom;
// let i = 0;
// let btn = document.querySelector(".btn1");

// btn.addEventListener("click", () => {


//     salom = setInterval(() => {
//         console.log("assalomu alaykum");
//         i++;
//     }, 1500);
// });








let result = document.querySelector("#result");

let savollar = [{
    savol: "kitob o'qish foydalimi \n a (ha) \n b (yoq) \n c (bilmiman)",
    javob: "a"
}, {
    savol: "pul kerakmi  \n a (ha) \n b (yoq) \n c (bilmiman)",
    javob: "a"
}, {
    savol: "Hamma sport foydalimi \n a (ha) \n b (yoq) \n c (bilmiman)",
    javob: "b"
}];
let ballar=0;

let userjavobi;
for (let i = 0; i < savollar.length; i++) {
    userjavobi = prompt(savollar[i].savol);
    if (userjavobi == savollar[i].javob) {
        alert("to'g'ri topdiz");
        ballar++;
    } else {
        alert("hato topdingiz");
    }
}

// console.log(savollar);

result.innerHTML = (`siz ${savollar.length} dan ${ballar} tasiga tog'ri javob berdingiz`);