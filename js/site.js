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
        //callk generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //call display numbers
        displayNumbers(numbers);
    }else{
        alert("You must enter integers")
    }
    //call generate numbers
    numbers = generateNumbers(startValue, endValue);
}

//generate numbers from startvalue to endvalue
//logic function(s)
function generateNumbers(startValue, endValue){
    let numbers = [];
    //we want to get all numbers from start to end
    for(let i=startValue; i<=endValue; index++){
        //this will execute in a loop until index = eValue;
        numbers.push(index);
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
            className = "even"
        }else{
            className = "odd"
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`
    }

    document.getElementById("results").innerHTML = templateRows;
}