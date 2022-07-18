//Controller Logic what gets the value//
function getNumbers() {

    //Within the html document search it for the element with the Id//
    //look for the first and second value property//
    let num1 = document.getElementById("numberOne").value;
    let num2 = document.getElementById("numberTwo").value;
    
    //Parse: Attempt to convert an integer from the num1 string//
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //If the the number 1 value is an integer give us an error; the !//
    //can be added to add the not true parameter//
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
       

        //The Sweet Alert//
        Swal.fire(
            {
                backdrop: false, 
                title: 'JS Operators',
                text: "That's not a number my friend!"
            }
        );

    }else{

        //calling subNumbers
        let difference = subNumbers(num1, num2);
        console.log("Your difference is " - difference);

        //calling sumNumbers
        let sum = sumNumbers(num1, num2);
        console.log("Your sum is " + sum);

        //calling multNumbers
        let product = mulNumbers(num1, num2);
        console.log("Your product is " + product);

        //calling divNumbers
        let quotient = divNumbers(num1, num2);
        console.log("Your quotient is " + quotient);

        //calling remNumbers
        let modulous = remNumbers(num1, num2);
        console.log("Your modulous is " + modulous);

        //calling addAllNumbers
        let sumAll = sumAllNumbers(num1, num2);
        console.log("Your sum of all is " + sumAll);

        //calling factorialNumbers
        let factorial = factorialNumbers(num1, num2)
        console.log("Your factorial is " + factorial);


        
        //display the value of the results//
        displayResults(sum, difference, product, quotient, modulous, sumAll, factorial)
    }
}

//Business Logic it does something//

// subtract two numbers and returns the result
function subNumbers(number1, number2){

    let difference = number1 - number2;

    ///let sum = number1 + number2
    return difference;

}

// subtract two numbers and returns the result
function sumNumbers(number1, number2){

    let sum = number1 + number2;

    ///let sum = number1 + number2
    return sum;

}

// subtract two numbers and returns the result
function mulNumbers(number1, number2){

    let product = number1 * number2;

    ///let sum = number1 + number2
    return product;

}
// subtract two numbers and returns the result
function divNumbers(number1, number2){

    let quotient = number1 / number2;

    ///let sum = number1 + number2
    return quotient;

}

// find the modulous (the remainder of unevenly divided numbers ORDER MATTERS)
function remNumbers(number1, number2){

    let modulous = number1 % number2;

    ///let sum = number1 + number2
    return modulous;

}

//find the sum of all the numbers of the array (This is a For loop)
function sumAllNumbers(startNumber, endNumber){

    let sumAll = 0;

    ///let sum = number1 + number2
    for (let i = startNumber; i <= endNumber; i++){
        sumAll = sumAll + i;
    } 
    
    return sumAll;

}

//find the sum of all the numbers of the 
function factorialNumbers(startNumber, endNumber){

    let factorial = 1;

    ///let sum = number1 + number2
    for (let i = startNumber; i <= endNumber; i++){
        factorial = factorial * i;
    } 
    
    return factorial;

}

//display all the results from out math functions
function displayResults(sumResult,subResult,productResult,quotientResult,modulousResult,sumallResult,factorialResult){

    let results = document.getElementById("results");
    results.innerHTML = "";

    //creating my p tag for the sumNumbers function
    let ptag = document.createElement("p");
    ptag.classList.add("pSum");
    ptag.innerHTML = "The Sum of the Numbers is " + sumResult;
    //"<p>5</p>"

    //creating my p tag
    let ptagSub = document.createElement("p");
    ptagSub.classList.add("pDifference");
    ptagSub.innerHTML = "The Difference of the Numbers is " + subResult;
    //"<p>5</p>

    //creating my p tag
    let ptagProduct = document.createElement("p");
    ptagProduct.classList.add("pProduct");
    ptagProduct.innerHTML = "The Product of the Numbers is " + productResult;
    //"<p>5</p>
    
    //creating my p tag
    let ptagQuotient = document.createElement("p");
    ptagQuotient.classList.add("pQuotient");
    ptagQuotient.innerHTML = "The Quotient of the Numbers is " + quotientResult;
    //"<p>5</p>
    
    //creating my p tag
    let ptagModulous = document.createElement("p");
    ptagModulous.classList.add("pModulous");
    ptagModulous.innerHTML = "The Modulous  of the Numbers is " + modulousResult;
    //"<p>5</p>
    
    //creating my p tag
    let ptagSumall = document.createElement("p");
    ptagSumall.classList.add("pSumall");
    ptagSumall.innerHTML = "The Sum of All of the Numbers is " + sumallResult;
    //"<p>5</p>
    
    //creating my p tag
    let ptagFactorial = document.createElement("p");
    ptagFactorial.classList.add("pFactorial");
    ptagFactorial.innerHTML = "The Factorial of the Numbers is " + factorialResult;
    //"<p>5</p>

    //add to the inner html of the results div

    results.appendChild(ptag);
    results.appendChild(ptagSub);
    results.appendChild(ptagProduct);
    results.appendChild(ptagQuotient);
    results.appendChild(ptagModulous);
    results.appendChild(ptagSumall);
    results.appendChild(ptagFactorial);
}