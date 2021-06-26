//1. Write a JavaScript program that accept two integers and display the larger in the console. 
let num1 = 1 ;
let num2 = 2;
                                                 
if (num1 > num2){
    console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else if(num2 > num1) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }
  

//2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display the specified sign in the console. 
//Sample numbers : 3, -7, 2
//Output : The sign is -
let num1 = 3;
let num2 = -7;
let num3 = 2;
if (num1>0 && num2>0 && num3>0){
    console.log("The sign is +");
}else if (num1<0 && num2<0 && num3<0){
    console.log("The sign is +");
}else if (num1>0 && num2<0 && num3<0){
    console.log("The sign is +");
}else if (num1<0 && num2>0 && num3<0){
    console.log("The sign is +");
}else{
    console.log("The sign is -");
}

//3. Write a JavaScript conditional statement to sort three numbers. Display the result in the console
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1
let num1 = 0;
let num2 = -1;
let num3 = 4;
if (num1>num2 && num1>num3){
        if (num2>num3){
            console.log(num1 + ", " +num2 + ", " +num3);
        }else{
            console.log(num1 + ", " +num3 + ", " +num2);
        }
}else if (num2>num1 && num2 >num3){
        if (num1>num3){
             console.log(num2 + ", " + num1 + ", " +num3);
        }else{
             console.log(num2 + ", " + num3 + ", " +num1);
        }
}else if (num3>num1 && num3>num2){
        if (num1>num2){
            console.log(num3 + ", " + num1 + ", " +num2);
        }
        else{
            console.log(num3 + ", " + num2 + ", " +num1);
        }
} 

//4. Write a JavaScript conditional statement to find the largest of five numbers.Display the result in the console. 
//Sample numbers : -5, -2, -6, 0, -1
//Output : 0
let a=-5;
let b=-2;
let c=-6;
let d= 0;
let f=-1;
if (a>b && a>c && a>d && a>f){
    console.log(a);
}else if (b>a && b>c && b>d && b>f){
    console.log(b);
}else if (c>a && c>b && c>d && c>f){
    console.log(c);
}else if (d>a && d>c && d>b && d>f){
    console.log(d);
}
else{
    console.log(f);
}