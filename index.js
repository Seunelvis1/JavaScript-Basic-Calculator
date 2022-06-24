alert("Hello world");

// var myName = "Adeniran Oluwaseun"
// var myHeight = "5.9 ft";
// var country = "Nigeria";

// document.write("My name is " + myName);
// document.write("<br>My height is " + myHeight);
// document.write("<br>My Country " + country);



var num1 = prompt("First Number:");
var num2 = prompt("Second Number:");
alert(" Choose multiply(*), add(+), subtract(-) and divide(/) operators respectively");
var operator = prompt("Operator");
if (isNaN(num1) || isNaN(num2)){
    alert("Please Enter a Valid Number");
}else{

if (operator === "*"){
    alert(num1 * num2);
}

if (operator === "+"){ 
    alert(num1 + num2);
}
if (operator === "/"){
    alert (num1 / num2);
}
if (operator === "-"){
    alert(num1 - num2);
}
}
