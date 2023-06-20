// // var firstName="Jayachandran";
// // var rollNo="RWD04011";
// // var geNder="Male";
// // var fatherName="Ravichandran";
// // var motherName="Parimalam"
// // var aGe="24";
// // var dOb="04.06.1999"
// // var qulifiCation="B.E - EEE";
// // var moblieNumber="8248251870";
// // var emAil="jayachandran.r1999@gmail.com";

// //document.getElementById('tblid').innerHTML='<tr><td>Name</td><td>'+firstName+'</td></tr>'
// // +'<tr><td>Roll No</td><td>'+rollNo+'</td></tr>'
// // +'<tr><td>Gender</td><td>'+geNder+'</td></tr>'
// // +'<tr><td>Father Name</td><td>'+fatherName+'</td></tr>'
// // +'<tr><td>Mother Name</td><td>'+motherName+'</td></tr>'
// // +'<tr><td>Age</td><td>'+aGe+'</td></tr>'
// // +'<tr><td>DOB</td><td>'+dOb+'</td></tr>'
// // +'<tr><td>Qulifiaction</td><td>'+qulifiCation+'</td></tr>'
// // +'<tr><td>Mobile Number</td><td>'+moblieNumber+'</td></tr>'
// // +'<tr><td>Email</td><td>'+emAil+'</td></tr>';

// var a=prompt("Enter value for a");
// var b=prompt("Enter value for b");
// var c=prompt("Enter value for c");
// if((a>b) && (a>c))
// {
//     alert('A is greater')
// }
// else if((b>a)&&(b>c))
// {
//     alert('B is greater')
// }
// else if((c>a)&&(c>b))
// {
//     alert('c is greater')
// }
// else
// {
//     alert("all are equal value")
// }
//  var Input1= parseInt(prompt("enter a value"));
//  var Input2= parseInt(prompt("enter a value"));
// //  document.write("1.Add <br> 2.Sub <br> 3.Mul <br> 4.Div ");
//  var choice=parseInt(prompt("enter a choice"));
//  switch(choice)
//  {
//     case 1:
//         var total=Input1+Input2;
//         alert("Add:"+ total);
//         break;
//     case 2:
//         var total=Input1-Input2;
//         alert("Sub:"+ total);
//         break;
//     case 3:
//         var total=Input1*Input2;
//         alert("Mul:"+ total);
//          break;
//     case 4:
//         var total=Input1/Input2;
//         alert("Div:"+ total);
//         break;
//         default:
//         alert("Invalid choice")
//         break;
//  }

// var year=2023
// var month=2;
// var daycount;
// switch (month){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         daycount = 31;
//         break;
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             daycount = 30;
//             break;
//             case 2:
//             if ((year % 4 == 0 && !(year % 100 == 0))|| year % 400 == 0){
//                 daycount=29;
//             }
//             else
//             {
//                 daycount=28;
//             }
//             break;
//             default:
//             daycount = 1;
//         }
//         console.log(daycount);
// var end=10;
// for (var st=1; st<=end; st++)
// {
//     if(st%2==0)
//     {
//         console.log(st);
//     }

// }


// var Off=10;
// for (var On=1; On<=Off; On++)
// {
//     if(On%2!=0)
//     {
//         console.log(Off);
//     }
// }

// var st=10;
// for (var end=10; end>=st; end--)
// {
//     if(end%2==0)
//     {
//         console.log(end);
//     }

// }
// var st=10;
// for (var end=1; end>=st; end--)
// {
//     if(end%2!=0)
//     {
//         console.log(end);
//     }
//  }
// let n=5; fact=1;
// for (let i=1; i<=n;i++)
// {
//     fact*=i;
//     console.log(fact);

// }
//  console.log('sum of series:'+fact);

//  let endingyear=2020;
//  for(let startingyear=2000; startingyear <= endingyear; startingyear++)
//  {
//      if(startingyear %4==0)
//      {
//          console.log("leap year"+startingyear);
//      }
//      else
//      {
//          console.log("not a leap year"+ startingyear);
//      }
//  }


// let n=10;
// for(let i=0;i<=n; i++)
// {
//     for(let j=0;j<=n;  j++)
// {
// console.log(i+''+j);
// }
// }

// let n=10;
// for (let i=0;i<=n; i++)
// {if(i>5)
// {
//     break;
// }
// console.log(i);
// }

// let n=10;
// for (let i=0;i<=n; i++)
// {if(i==5)
// {
//     continue;
// }
// console.log(i);
// }


// function printdata()
// {
//     console.log("hai");
// }
// printdata();

// var a=3;
// var b=-7;
// var c=2;
// if(a>0&& b>0&&c>0)
// {
//     alert("The sign is-");
// }


// task-1
// function greet()
// {
//     return "Hello! Have a Nice day";
// }
// console.log(greet());


// task-2
// function Intergers(a,b)
// {
//     return(a+b);
// }
// console.log(Intergers(10,200));

// task-3
// function getnationbird(NationBird)
// {
//     console.log(NationBird)
// }
// getnationbird("Peacock");




// task-4
// function greet(name)
// {
//     console.log("Hai "+name);
// }
// greet("Aravindh Kumar")

// task-5
// function average(a,b)
// {
//     return (a+b)/2;
// }
// console.log(average(4,2));


// task-6
// var a=5;
// var b=60;
// function convertMinutesToSeconds(minutes)
// {
//     console.log(a*b);
// }
// convertMinutesToSeconds()


// task-7

// var num1 = parseInt(prompt("Enter first number: "));
// var num2 = parseInt(prompt("Enter second number: "));
// var num3 = parseInt(prompt("Enter third number: "));
//  function findlargest()
//  {

// if(num1 > num2 && num1 > num3)
// {
//     largest = num1;
// }
// else if(num2 > num3)
// {
//     largest = num2;
// }
// else
// {
//     largest = num3;
// }
// return +largest;
//  }
//  console.log(findlargest());

// task-8

//  function Triangle(x,y,z)
//  {
//     if((x==y)&&(x==z))
//     {
//         console.log("this is equilateral triangle");
//     }
//     else if((x==y)||(y==z)||(x==z))
//     {
//         console.log("this is isosceles triangle");
//     }
//     else{
//         console.log("this scalene triangle");
//     }
//  }
//  let x=prompt("enter the value");
//  let y=prompt("enter the value");
//  let z=prompt("enter the value");
//  Triangle(x,y,z);

// task-9
//  function checkInrange(num, start, end)
//  {
//     if(num >= start && num <= end){
//         console.log(num+" is between the range "+start+" and "+end);
//     }
//     else{
//         console.log(num+" is outside the range "+start+" and "+end);
//     }
// }
//     checkInrange(15,11,30)
//     checkInrange(20,30,51)


// task-10
// function evalNumber(num1, num2, op)
// {
//     if (op == "add") {
//         console.log("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))
//     }
//     else if (op == "subtract") {
//         console.log("Difference of " + num1 + " and " + num2 + " is " + (num1 - num2))
//     }
//     else if (op == "multiply") {
//         console.log("Product of " + num1 + " and " + num2 + " is " + num1 * num2)
//     }
//     else if (op == "divide") {
//         console.log("Divison of " + num1 + " and " + num2 + " is " + num1 / num2)
//     }
//     else if (op == "modules") {
//         console.log("Modules of " + num1 + " and " + num2 + " is " + num1 % num2)
//     }
//     else {
//         console.log(op == "is an invalid operation")
//     }
// }
// evalNumber(15,10, "add")
// evalNumber(25,18,"subtract")
// evalNumber(14,3 ,"multiply")
// evalNumber(78,2 ,"divide")
// evalNumber(15,5 ,"modules")
// evalNumber(4,6,"angle")


// task-11
// function checkLeapYear(year){
//     if((year%4 == 0)&&(year%100 != 0)||(year%400 == 0)){
//         console.log("Year "+year+" is a leap year");
//     }
//     else{
//         console.log("Year "+year+" is not a leap year");
//     }
// }
// checkLeapYear(2000)
// checkLeapYear(2015)
// checkLeapYear(2023)


// task-12
// function findGrade(name, marks){
//     if(marks >= 90 && marks <= 100){
//         console.log(name+"you have recevied S grade")
//     }
//     else if(marks >= 80 && marks <= 90){
//         console.log(name+"you have recevied A grade")
//     }
//     else if(marks >= 70 && marks <= 80){
//         console.log(name+"you have recevied B grade")
//     }
//     else if(marks >= 60 && marks <= 70){
//         console.log(name+"you have recevied C grade")
//     }
//     else if(marks >= 50 && marks <= 60){
//         console.log(name+"you have recevied D grade")
//     }
//     else if(marks >= 40 && marks <= 50){
//         console.log(name+"you have recevied E grade")
//     }
//     else if(marks >= 0 && marks <= 40){
//         console.log(name+"you have recevied a grade failed")
//     }
//     else{
//         console.log("Invalid marks "+marks)
//     }
// }
// findGrade("Jai ",91)
// findGrade("Jai ",85)
// findGrade("Jai ",72)
// findGrade("Jai ",63)
// findGrade("Jai ",59)
// findGrade("Jai ",43)
// findGrade("Jai ",25)
// findGrade("Jai ",103)