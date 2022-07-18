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

        //calling sumNumbers
        let sum = sumNumbers(num1, num2);
        let sub = num1 - num2;
    }
}

// adds two numbers and returns the result
function sumNumbers(number1, number2){

    let sum = number1 + number2;

    ///let sum = number1 + number2
    return sum;

}

//subtract numbers function//
// adds two numbers and returns the result
function subNumbers(number1, number2){

    let sum = number1 - number2;

    ///let sum = number1 + number2
    return sum;

}