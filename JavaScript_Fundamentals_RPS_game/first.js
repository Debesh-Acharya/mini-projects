// class ToyotaCar{
//   constructor(brand){//constructor
//     console.log("Creating a new object");
//     this.brand=brand;
//   }
//   start(){
//     console.log("start");
//   }
//   stop(){
//     console.log("stop");
//   }
  
//   }
// let fortuner =new ToyotaCar();
// fortuner.setBrand("Fortuner");

// Inheritance
// class Person{
//   constructor(name){
//     this.species="homosapiens";
//     this.name=name;
//   }
//   eat(){
//     console.log("eat");
//   }
//   sleep(){
//     console.log("sleep");
//   }
// }
// class eng extends Person{
//   constructor(name){
//     super(name);
    
//   }
  
//   work(){
//     super.eat();
//     console.log("Work");
//   }
// }
// let debesh= new eng("debesh");


// class user{
//   constructor(name,email){
//     this.name=name;
//     this.email=email;
//   }
//   viewdata(){
//     console.log("data");
//   }
// }
// let s1= new user("debesh","abcd@gmail.com");
// let s2= new user("deb","abd@gmail.com");

// class admin extends user{
//   editdata(){
    
//   }
// }

//Callbacks,promises,async await

// console.log("one")
// setTimeout(()=>{
//   console.log("Hello")
// },2000)//time given in millisecond
// console.log("Two")

// function sum(a,b){
//   console.log(a+b)
// }

// function calc(a,b,sumCallback){
//   sumCallback(a,b)
// }

// calc(1,2,sum);

// function getData(dataId,getNextData){
//   setTimeout(()=>{
//     console.log("data",dataId)
//     if(getNextData){
//       getNextData();
//     }
//   },2000)
// }
// //callback hell -> nested callback
// getData(1,()=>{
//   getData(2,()=>{{
//     getData(3,()=>{
//       getData(4)
//     })
//   }});
// })

//Promises
// const getPromise =()=>{
//   return new Promise((resolve,reject)=>{
//     console.log("I am a promise")
//     resolve("success");
//   })
// }
// let promise=getPromise()
// promise.then((res)=>{
//   console.log("promise fulfilled",res);
// })
function getData(dataId){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data",dataId)
      resolve("success")
    },2000)
  })
}
//async await
async function getAllData(){
  await getData(1)
  await getData(2)
  await getData(3)
}

(async function (){
  await getData(1)
  await getData(2)
  await getData(3)
})();

// //Promise chain
// getData(1).then((res)=>{
//   return getData(2);
// }).then((res)=>{
//   return getData(3);
// }).then((res)=>{
//   console.log(res);
// })

  
// function asyncFunc(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("Some data 1")
//       resolve("success")
//     },2000)
//   })
// }
// function asyncFunc2(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("Some data 2")
//       resolve("success")
//     },2000)
//   })
// }
// console.log("fetching data 1");//promises chaining
// asyncFunc().then((res)=>{
  
//   console.log("fetching data 2")
//   asyncFunc2().then((res)=>{
      

//     })
//   })

//Async await

//  async function hello(){
//   console.log("hello")
// }

// function api(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("Weather api");
//     resolve(200);
//     },2000)
//   })
// }
// async function getWeatherData(){
//   await api(); // async await
//   await api();
// }







// const student={
//   fullName:"Debesh Acharya",
//   marks:60,
//   printMarks:function(){
//     console.log("marks=",this.marks);//accessing marks through [this].
//   }
// }
// const employee={
//   calcTax(){
//     console.log("Tax rate is 10%");
//   }
// }
// const Debesh={
//   salary:50000,
//   calcTax(){
//     console.log("Tax rate is 20%");
//   }
// }
// Debesh.__proto__=employee;
















// let userScore = 0;
// let compScore = 0;

// const choices = document.querySelectorAll(".choice");
// const msg = document.querySelector("#msg");

// const userScorePara = document.querySelector("#user-score");
// const compScorePara = document.querySelector("#comp-score");

// const genCompChoice = () => {
//   const options = ["rock", "paper", "scissors"];
//   const randIdx = Math.floor(Math.random() * 3);
//   return options[randIdx];
// };

// const drawGame = () => {
//   msg.innerText = "Game was Draw. Play again.";
//   msg.style.backgroundColor = "#081b31";
// };

// const showWinner = (userWin, userChoice, compChoice) => {
//   if (userWin) {
//     userScore++;
//     userScorePara.innerText = userScore;
//     msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
//     msg.style.backgroundColor = "green";
//   } else {
//     compScore++;
//     compScorePara.innerText = compScore;
//     msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
//     msg.style.backgroundColor = "red";
//   }
// };

// const playGame = (userChoice) => {
//   const compChoice = genCompChoice();

//   if (userChoice === compChoice) {
//     drawGame();
//   } else {
//     let userWin = true;
//     if (userChoice === "rock") {
//       userWin = compChoice === "paper" ? false : true;
//     } else if (userChoice === "paper") {
//       userWin = compChoice === "scissors" ? false : true;
//     } else {
//       userWin = compChoice === "rock" ? false : true;
//     }
//     showWinner(userWin, userChoice, compChoice);
//   }
// };

// choices.forEach((choice) => {
//   choice.addEventListener("click", () => {
//     const userChoice = choice.getAttribute("id");
//     playGame(userChoice);
//   });
// });


























// let switchBtn=document.querySelector("#switch");//DARK MODE
// let body = document.querySelector("body");
// let currMode="light";

// switchBtn.addEventListener("click",()=>{
//     if(currMode==="light"){
//         currMode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currMode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// })



// let div=document.querySelector("div");
// console.dir(div);





// let newButton = document.createElement("button");
// newButton.innerText="Click me";
// newButton.style.color="white";
// newButton.style.backgroundColor="blue";
// document.querySelector("body").prepend(newButton);






// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }
// const handler1=()=>{
//     console.log("Button1 was clicked")
// }
// btn1.addEventListener("click",handler1);

// btn1.removeEventListener("click",handler1);

// let box=document.querySelector("div");
// box.onmouseover=()=>{
//     console.log("You are inside div")

// }













// let heading=document.getElementById("heading");
// console.dir(heading);

// let headings=document.getElementsByClassName("heading1");
// console.dir(headings);

// let heading2=document.getElementsByTagName("h1");
// console.dir(heading2);

// let elements= document.querySelector("button");//returns the first element
// console.dir(elements);

// let allElements=document.querySelectorAll("h1");//returns all elements
// console.dir(allElements);












// function myFunction(){
//     console.log("My name is Debesh Acharya");
//     console.log("We are learning JS");
// }
// myFunction();


// function Myfunction(msg){//parameter->input
//     console.log(msg);
// }
// Myfunction("We are learning ");//arguement

// function sum(a,b){
//     return a+b;
// }
// // arrow sum function
// const arrowSum =(a,b)=>{
//     console.log(a+b);
// }
// function multiplication(a,b){
//     return a*b;
// }
// // arrow multiplication
// const arrowMul=(x,y)=>{
//     console.log(x*y);
// }
// function CountVowel(str){
//     let count=0;
//     for(let char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
        
//     }
// return count;
// }
// const countVow =(str)=>{
//     let count=0;
//     for(let char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
        
//     }
// return count;

// }
// let arr =[1,2,3,4,5];//creates an array to store ..
// arr.map((val)=>{
//     console.log(val);
// })
// let arr=[1,2,3,4,5,6,7,8,9];//filter out array
// let evenArr=arr.filter((val)=>{
//     return val%2===0;
// })
// console.log(evenArr);

//Reduce method
// let arr=[1,2,3,4];
// const output=arr.reduce((res,curr)=>{
//     return res+curr;
// })
// console.log(output);
// let n = prompt("Enter the value of n");//Creating an array when user gives n (array upto user input n)
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);


// arr.forEach((val)=>{
//     console.log(val**2);
// })

// let num=[250,645,300,900,50];
// for(let i=0;i<num.length;i++){
//     let offer=num[i]/10;
//     num[i]-=offer;
// }
// console.log(num);
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let val of marks){
//     sum=sum+val;
// }
// let avg = sum/marks.length;
// console.log(avg);
// for(let mark of marks){
//     console.log(mark);
// }


// for(let i=0;i<marks.length;i++){
    
// console.log(marks[i]);
// }




// let student={
//     name : "Debesh",
//     age : 19,
//     isPass :true,
// };
// for(let i in student){
//     console.log(i,student[i]);
// }

// for(let i = 0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }
// let gameNum=69;

// let userNum=prompt("Enter the correct game number here -");

// while(userNum != gameNum){
//     userNum=prompt("You have entered the wrong number try again -");
// }
// console.log("congratulations");


// let grades = prompt("Grades =");

// if(grades <=100 && grades>= 90){
//     console.log("A");
// }else if(grades <=89 && grades>=70){
//     console.log("B");
// }else if (grades <= 69 && grades >=60){
//     console.log("C");
// }else if(grades <= 59 && grades >=50){
//     console.log("D");
// }else if(grades <=49 && grades >=0){
//     console.log("F");
// }else{
//     console.log("Not Valid")
// }


// let age=9;

// if(age>18){
//     console.log("Can vote");
// }else{
//     console.log('can not vote');
// }
// let age=9;

// let result=age<=18 ? "Child" : "Adult";
// console.log(result);


// const profile={
//     Fullname:"ShradhaKhapra",
//     posts:195,
//     Followers:"569k",
//     Following:4,
//     isFollow:false,
// };
// let a =5;
// let b=2;
// // console.log("a =",a ,"& b =",b);
// // console.log("a + b =",a+b);
// // console.log("a - b =",a-b);
// // console.log("a * b =",a*b);
// // console.log("a / b =",a/b);
// // console.log("a % b =",a%b);
// // console.log("a ** b =",a**b);
// console.log("a =",a+=4);