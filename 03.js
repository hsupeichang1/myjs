//---合法變數
//[ a-z A-Z 0-9 $ _ ]

let var1;
let var2 = 123; //指派
let $_$ = 333;

document.write($_$);
document.write(var1 + "<br>"); //undefined

var1= 123;
document.write(typeof(var1) + "<br>"); //查看型態 number

var1= 12.3;
document.write(typeof(var1) + "<br>"); //number

var1= true;
document.write(typeof(var1) + "<br>"); //boolean

var1= "Brad";
document.write(typeof(var1) + "<br>"); //string


//---宣告常數  第一次等號初始化該常數
const name = 'Brad'; //通常全大寫
//name = 'Peter';    //常數不能指派

document.write("my name is " + name + "<br>");
document.write(`my name is ${name} <br>`);

let a = 10, b = 3;
document.write(`${a} + ${b} = ${a+b}`);
