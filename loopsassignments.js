
// Greatest of 3 numbers


function greatest(a,b,c)
{
	if(a>=b && a>=c)
	{
		return a
	}

	else if (b>=a && b>=c)
	{
		return b
	}
	else{

		return c
	}
}


let greatestnumber = greatest(16341654,45465541,96646546)
console.log(`the greatest of three number is ${greatestnumber}`)




// Check if a Number is Positive, Negative, or Zero

let number=10
if(number>1)
{
console.log("this is positive number")
}
else if(number<0)
{
	console.log("this is Negative number")
}
else
{
	console.log("this is zero")
}


 // Check if a Year is a Leap Year



let year= 2023;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
{
    console.log(year + " is a leap year.");
} 
else {
    console.log(year + " is not a leap year.");
}


// Determine the Largest of 3 Numbers

let a=30
let b=50
let c=60

if(a>=b && a>=c)
	{
console.log("a is Largest number")
	}
else if (b>=a && b>=c)
	{
console.log("b is Largest number")
	}
else{
console.log("c is Largest number")
	}

//  Write code using switch statement to show traffic signal light information

// if it is red show ==>  "Stop! The color is red."

// if it is green show ==> "Go! The color is green."

// if it is yellow show ==> “Slow down! The color is yellow.”

let singleClr='yellow';
switch(singleClr)
{
	case 'red':
	console.log("Stop! The color is red.");
    break;

    case 'green':
    console.log("Go! The color is green.");
    break;

    case 'yellow':
    console.log("Slow down! The color is yellow.");
    break;

    default:
    console.log("not vailed input")
}



















