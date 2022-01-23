//get the values from the the page
//starts or controlloer function
function getValues(){
    //get value from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //we need to validate our input
    //parse into integer
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //
    if(Number.isInteger(startValue)&& Number.isInteger(endValue)){
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //call display numbers
        displayNumbers(numbers);
    }else{
        alert("You must enter integers")
    }
}

//generate numbers from startvalue to endvalue
//logic function(s)
function generateNumbers(startValue, endValue){
    let numbers = [];
    //we want to get all numbers from start to end
    for(let i=startValue; i<=endValue; i++){
        //this will execute in a loop until index = eValue;
        numbers.push(i);
    }
    return numbers;
}

//display even numbers and mark them bold
//display or view functions
function displayNumbers(numbers){
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let className = "even"
        let number = numbers[index];
        if(number % 2  == 0){
            className = "align-middle text-center even"
            spanClassName = "text-primary text-gradient"
        }else{
            className = "align-middle text-center odd"
            spanClassName = "text-secondary"
        }
        templateRows += `<tr><td class="${className}"><span class="${spanClassName}">${number}</span></td></tr>`
    }

    document.getElementById("results").innerHTML = templateRows;
}